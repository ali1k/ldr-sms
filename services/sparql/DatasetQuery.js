'use strict';
import {getQueryDataTypeValue} from '../utils/helpers';
class DatasetQuery{
    constructor() {
        this.prefixes=`
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX owl: <http://www.w3.org/2002/07/owl#>
        PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
        PREFIX dcterms: <http://purl.org/dc/terms/>
        PREFIX void: <http://rdfs.org/ns/void#>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        `;
        this.query='';
    }
    prepareGraphName(graphName){
        let gStart = 'GRAPH <'+ graphName +'> { ';
        let gEnd = ' } ';
        if(!graphName || graphName === 'default'){
            gStart =' ';
            gEnd = ' ';
        }
        return {gStart: gStart, gEnd: gEnd}
    }
    filterPropertyPath(propertyURI){
        if(propertyURI.indexOf('->')!== -1){
            let tmp2 =[], tmp = propertyURI.split('->');
            tmp.forEach((el)=> {
                tmp2.push('<'+el.trim()+'>');
            });
            return tmp2.join('/');
        }else{
            return '<'+ propertyURI + '>';
        }
    }
    countResourcesByType(endpointParameters, graphName, type) {
        let {gStart, gEnd} = this.prepareGraphName(graphName);
        let st = '?resource a <'+ type + '> .';
        //will get all the types
        if(!type.length || (type.length && !type[0]) ){
            st = '?resource a ?type .';
        }
        //if we have multiple type, get all of them
        let typeURIs = [];
        if(type.length > 1){
            type.forEach(function(uri) {
                typeURIs.push('<' + uri + '>');
            });
            st = '?resource a ?type . FILTER (?type IN (' + typeURIs.join(',') + '))';
        }
        //go to default graph if no graph name is given
        this.query = `
        SELECT (count(?resource) AS ?total) WHERE {
            ${gStart}
                ${st}
            ${gEnd}
        }
        `;
        return this.prefixes + this.query;
    }
    countLinks(endpointParameters, graphName) {
        let {gStart, gEnd} = this.prepareGraphName(graphName);
        this.query = `
        SELECT (count(?source) AS ?total) WHERE {
            ${gStart}
                ?source owl:sameAs ?target .
            ${gEnd}
        }
        `;
        return this.prefixes + this.query;
    }
    getLinkset(endpointParameters, graphName, source, target, rconfig, limit, offset) {
        let {gStart, gEnd} = this.prepareGraphName(graphName);
        this.query = `
        SELECT DISTINCT ?source ?target  WHERE {
            ${gStart}
                ?source owl:sameAs ?target .
            ${gEnd}
        }
        LIMIT ${limit} OFFSET ${offset}
        `;
        return this.prefixes + this.query;
    }
    getLinksetDetails(endpointParameters, source, target, entities) {
        let sourceSt ='';
        let targetSt ='';
        let sources = [];
        let targets = [];
        entities.forEach((entity, index)=> {
            sources.push('?s = <' + entity.s + '>');
            targets.push('?t = <' + entity.t + '>');
        })
        sourceSt = 'FILTER ('+ sources.join(' || ') +')';
        targetSt = 'FILTER ('+ targets.join(' || ') +')';
        this.query = `
        SELECT DISTINCT ?s ?sprop ?sobj ?t ?tprop ?tobj WHERE {
            {
                GRAPH <${source}> {
                    ?s ?sprop ?sobj .
                    FILTER (?sprop != geo:geometry)
                    ${sourceSt}

                }
            }
            UNION
            {
                GRAPH <${target}> {
                    ?t ?tprop ?tobj .
                    FILTER (?tprop != geo:geometry)
                    ${targetSt}
                }
            }
        }
        `;
        return this.prefixes + this.query;
    }
    getResourcesByType(endpointParameters, graphName, rconfig, limit, offset) {
        let self = this;
        let {gStart, gEnd} = this.prepareGraphName(graphName);
        let type = rconfig.resourceFocusType;
        let resourceLabelProperty, resourceImageProperty, resourceGeoProperty;
        if(rconfig.resourceLabelProperty){
            resourceLabelProperty = rconfig.resourceLabelProperty;
        }
        if(rconfig.resourceImageProperty){
            resourceImageProperty = rconfig.resourceImageProperty;
        }
        if(rconfig.resourceGeoProperty){
            resourceGeoProperty = rconfig.resourceGeoProperty;
        }
        let selectSt = '';
        //specify the right label for resources
        let optPhase = 'OPTIONAL { ?resource dcterms:title ?title .} ';
        let bindPhase = '';
        if(resourceLabelProperty && resourceLabelProperty.length){
            if(resourceLabelProperty.length === 1){
                optPhase = 'OPTIONAL { ?resource ' + self.filterPropertyPath(resourceLabelProperty[0]) + ' ?title .} ';
            }else {
                optPhase = '';
                let tmpA = [];
                resourceLabelProperty.forEach(function(prop, index) {
                    optPhase = optPhase + 'OPTIONAL { ?resource ' + self.filterPropertyPath(prop) + ' ?vp'+index+' .} ';
                    tmpA.push('?vp' + index);
                });
                bindPhase = ' BIND(CONCAT('+tmpA.join(',"-",')+') AS ?title) '
            }
        }
        if(resourceImageProperty && resourceImageProperty.length){
            optPhase = optPhase + ' OPTIONAL { ?resource ' + self.filterPropertyPath(resourceImageProperty[0]) + ' ?image .} ';
            selectSt = selectSt + ' ?image';
        }
        if(resourceGeoProperty && resourceGeoProperty.length){
            optPhase = optPhase + ' OPTIONAL { ?resource ' + self.filterPropertyPath(resourceGeoProperty[0]) + ' ?geo .} ';
            selectSt = selectSt + ' ?geo';
        }
        let st = '?resource a <'+ type + '> .';
        //will get all the types
        if(!type.length || (type.length && !type[0]) ){
            st = '?resource a ?type .';
        }
        //if we have multiple type, get all of them
        let typeURIs = [];
        if(type.length > 1){
            type.forEach(function(uri) {
                typeURIs.push('<' + uri + '>');
            });
            st = '?resource a ?type . FILTER (?type IN (' + typeURIs.join(',') + '))';
        }
        this.query = `
        SELECT DISTINCT ?resource ?title ?label ${selectSt} WHERE {
            ${gStart}
                {
                    SELECT DISTINCT ?resource  WHERE {
                        ${gStart}
                            ${st}
                        ${gEnd}
                    }
                    LIMIT ${limit} OFFSET ${offset}
                }
                OPTIONAL { ?resource rdfs:label ?label .}
                ${optPhase}
                ${bindPhase}
            ${gEnd}

        }
        `;
        return this.prefixes + this.query;
    }
    getResourcePropForAnnotation(endpointParameters, graphName, type, propertyURI, limit, offset) {
        let self = this;
        let {gStart, gEnd} = this.prepareGraphName(graphName);
        let st = '?resource a <'+ type + '> .';
        //will get all the types
        if(!type.length || (type.length && !type[0]) ){
            st = '?resource a ?type .';
        }
        //if we have multiple type, get all of them
        let typeURIs = [];
        if(type.length > 1){
            type.forEach(function(uri) {
                typeURIs.push('<' + uri + '>');
            });
            st = '?resource a ?type . FILTER (?type IN (' + typeURIs.join(',') + '))';
        }
        this.query = `
        SELECT DISTINCT ?resource ?objectValue WHERE {
            ${gStart}
                ${st}
                ?resource <${propertyURI}> ?objectValue .
            ${gEnd}
        }
        LIMIT ${limit} OFFSET ${offset}
        `;
        return this.prefixes + this.query;
    }
}
export default DatasetQuery;
