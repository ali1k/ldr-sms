'use strict';
import React from 'react';
import {NavLink} from 'fluxible-router';

class DataIngestion extends React.Component {
    render() {
        return (
            <div className="ui page stacked grid" ref="home">
              <div className="ui row">
                <div className="column">
                    <div className="ui massive breadcrumb">
                      <NavLink routeName="home" className="section" href="/">SMS Platform</NavLink>
                      <i className="right chevron icon divider"></i>
                      <div className="active section">Data Ingestion</div>
                    </div>
                    <div className="ui segment">
                      <p style={{textAlign: 'justify', fontSize: '1.2em'}}>
                          Importing data to SMS platform can be done both manually and automatically based on the "Entity types" covered by a dataset, " Format and structure" of data and "Data access policy" defined for data to be imported. The latter is important as not all data can be accessed by every user, and different levels of accessibility apply, depending on subscriptions and on permission of the owners of datasets.
                      </p>
                      <img className="ui centered image bordered" src="/assets/img/docs/image04.png" />
                      <p style={{textAlign: 'justify', fontSize: '1.2em'}}>
                          Following questions need to be answered before importing data into SMS:
                      </p>
                      <div className="ui divided list">
                          <div className="item">
                              <div className="content">
                                <div className="header">
                                    What types of entities are covered by the dataset?
                                </div>
                                <div className="description">
                                    The answer to this question, helps SMS to find the potential points of linking and also to check if the conceptual model should be amended to accommodate new entity types.
                                </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="content">
                                <div className="header">
                                    What is the format and structure of data to be imported?
                                </div>
                                <div className="description">
                                   The answer to this question, helps SMS to automate the ingestion process if the data format and structure are based on the standard interfaces supported by SMS.
                                </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="content">
                                <div className="header">
                                    What are the data access policies?
                                </div>
                                <div className="description">
                                    The answer to this question, helps SMS to apply restriction rules when accessing the imported dataset.
                                </div>
                              </div>
                          </div>
                      </div>
                      <h2>Linked Data Creation</h2>
                      <img className="ui medium right floated image bordered animated pulse" src="/assets/img/docs/image25.jpg" />
                      <p style={{textAlign: 'justify', fontSize: '1.2em'}}>
                          There are several steps followed in the lifecycle of linked data to extract and store the imported data into SMS triple store. The lifecycle starts by a basic (syntactic) conversion of data to RDF format without applying any specific vocabularies. This basic conversion is then enriched by applying several linking and enrichment services. Different services and scripts are used to convert unstructured and structured data to RDF. Techniques such as Named Entity Recognition (discussed later in the document) can be employed to extract named entities from textual content. A concrete example is recognizing research institutions and universities in a researcher’s CV (Curriculum vitae), using named entity recognition by linking the CV to databases with background knowledge such as DBpedia.
                          For structured content, the tool will be selected based on the format. For example, <a href="http://openrefine.org/">OpenRefine</a> can be used to convert spreadsheet data to RDF.

                      </p>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = DataIngestion;
