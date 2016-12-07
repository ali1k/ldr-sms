export default {
    // config = scope + spec
    // scope is one the 15 combination of dataset, resource, property and object
    config: {
        //---------depth 1------------
        dataset: {
            'generic': {
                resourceFocusType: [],
                //only allow to view data -> disable edit
                readOnly: 1,
                //used for pagination in resource list
                maxNumberOfResourcesOnPage: 20,
                datasetReactor: ['Dataset']
            },
            'http://rdf.risis.eu/sms/users.ttl#': {
                readOnly: 1
            },
            'http://ld-r.org/configurations': {
                readOnly: 0,
                allowResourceClone: 1,
                allowPropertyDelete: 1,
                allowResourceNew: 1,
                allowPropertyNew: 1,
                allowNewValue: 1,
                resourceFocusType: ['https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#ReactorConfig', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#ServerConfig','https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#FacetsPropertyConfig', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#FacetsConfig'],
                datasetLabel: ['LD-R Configurations'],
                resourceLabelProperty: ['http://www.w3.org/2000/01/rdf-schema#label']
            },
            'http://orgref.org': {
                readOnly: 1,
                resourceFocusType: ['http://risis.eu/orgref/ontology/class/Organisation'],
                datasetLabel: ['OrgRef Dataset'],
                //specifies what property should be used as display label of the resource
                resourceLabelProperty : ['http://risis.eu/orgref/ontology/predicate/Name']
            },
            'http://grid.ac': {
                readOnly: 1,
                resourceFocusType: ['http://xmlns.com/foaf/0.1/Organization'],
                datasetLabel: ['GRID (Global Research Identifier Database) Dataset'],
                resourceLabelProperty: ['http://www.w3.org/2000/01/rdf-schema#label']
            },
            'http://risis.eu/dataset/nano': {
                readOnly: 1,
                resourceFocusType: ['http://risis.eu/nano/ontology/class/Organisation'],
                datasetLabel: ['[RISIS] Nano Organizations Dataset'],
                resourceLabelProperty : ['http://risis.eu/nano/ontology/predicate/org_name_std']
            },
            'http://more2Orgs.risis.eu': {
                readOnly: 1,
                resourceFocusType: ['http://risis.eu/More2/ontology/class/Organisation'],
                datasetLabel: ['[RISIS] Amadeus Sample Organizations Dataset'],
                resourceLabelProperty: ['http://risis.eu/More2/ontology/predicate/Companyname']
            },
            'http://dx.doi.org/10.13039/fundref_registry': {
                readOnly: 1,
                resourceFocusType: ['http://www.w3.org/2004/02/skos/core#Concept'],
                datasetLabel: ['Open Funder Dataset'],
                resourceLabelProperty: ['http://www.w3.org/2000/01/rdf-schema#label']
            },
            'http://risis.eu/dataset/Eter': {
                readOnly: 1,
                resourceFocusType: ['http://risis.eu/Eter/ontology/class/University'],
                datasetLabel: ['[RISIS] ETER Dataset'],
                resourceLabelProperty: ['http://risis.eu/Eter/ontology/predicate/institution_Name']
            },
            'http://www.leidenranking.com': {
                readOnly: 1,
                resourceFocusType: ['http://risis.eu/leidenRanking/ontology/class/Organisation'],
                datasetLabel: ['[RISIS] CWTS Leiden Ranking Dataset'],
                resourceLabelProperty: ['http://risis.eu/leidenRanking/ontology/predicate/University']
            },
            'http://live.dbpedia.org': {
                resourceFocusType: ['http://dbpedia.org/ontology/EducationalInstitution'],
                readOnly: 1,
                datasetLabel: ['DBpedia Educational Institutes Dataset']
            },
            'http://risis.eu/cordisH2020': {
                resourceFocusType: ['http://risis.eu/cordisH2020/vocab/SignedGrantAgreement'],
                readOnly: 1,
                datasetLabel: ['Cordis H2020 Projects Dataset'],
                resourceLabelProperty: ['http://purl.org/dc/terms/title']
            },
            'http://risis.eu/dataset/eupro': {
                //resourceFocusType: ['http://risis.eu/eupro/ontology/class/Projects'],
                readOnly: 1,
                datasetLabel: ['[RISIS] EUPRO Projects Dataset']
            },
            'http://www.freme-project.eu/datasets/cordis': {
                resourceFocusType: ['http://dbpedia.org/ontology/ResearchProject'],
                readOnly: 1,
                datasetLabel: ['Cordis FP7 Projects Dataset'],
                resourceLabelProperty: ['http://purl.org/dc/elements/1.1/title']
            },
            'http://geo.risis.eu/rvo-nl': {
                resourceFocusType: ['http://geo.risis.eu/vocabulary/rvo-nl/Project'],
                readOnly: 1,
                datasetLabel: ['NL-RVO Projects Dataset'],
                resourceLabelProperty: ['http://purl.org/dc/terms/title']
            },
            /*
            'http://risis.eu/dataset/nano/docs': {
                readOnly: 1,
                resourceFocusType: ['http://risis.eu/nano/ontology/class/Document'],
                datasetLabel: ['Nano Applications Dataset']
            },
            */
            'http://geo.risis.eu/oecd': {
                resourceFocusType: ['http://geo.risis.eu/vocabulary/oecd/Municipality'],
                readOnly: 1,
                datasetLabel: ['OECD FUA Dataset'],
                resourceLabelProperty: ['http://purl.org/dc/terms/title']
            },
            'http://geo.risis.eu/cbs-nl': {
                resourceFocusType: ['http://geo.risis.eu/vocabulary/cbs-nl/AdministrativeArea'],
                readOnly: 1,
                datasetLabel: ['NL-CBS Statistics Dataset'],
                resourceLabelProperty: ['http://purl.org/dc/terms/title']
            },
            'http://risis.eu/wos': {
                readOnly: 1,
                datasetLabel: ['WoS Dataset']
            },
            'http://risis.eu/genderc/applicants': {
                resourceFocusType: ['http://risis.eu/genderc/vocab/Applicant'],
                readOnly: 1,
                datasetLabel: ['ERC Applicants Dataset']
            },
            'http://risis.eu/genderc/grants': {
                resourceFocusType: ['http://risis.eu/genderc/vocab/Grant'],
                readOnly: 1,
                datasetLabel: ['ERC Grants Dataset']
            },
            'http://risis.eu/genderc/evaluations': {
                resourceFocusType: ['http://risis.eu/genderc/vocab/Evaluation'],
                readOnly: 1,
                datasetLabel: ['ERC Evaluations Dataset']
            },
            'http://risis.eu/genderc/applications': {
                resourceFocusType: ['http://risis.eu/genderc/vocab/Application'],
                readOnly: 1,
                datasetLabel: ['ERC Grant Applications Dataset']
            },
            'http://risis.eu/genderc/rankings': {
                readOnly: 1,
                datasetLabel: ['Basic University Rankings Dataset for gendERC']
            },
            'https://ec.europa.eu/jrc/en/language-technologies/jrc-names': {
                readOnly: 1,
                datasetLabel: ['JRC-Names Dataset']
            },
            'http://classifications.risis.eu/countries': {
                readOnly: 1,
                datasetLabel: ['Classifications: Countries Dataset'],
                resourceFocusType: ['http://risis.eu/CountriesGeoData/ontology/class/Country'],
                resourceLabelProperty: ['http://risis.eu/CountriesGeoData/ontology/predicate/name']
            }
        },
        resource: {
            'generic': {
                //if enabled, will categorize properties in different tabs based on property categories
                usePropertyCategories: 0,
                propertyCategories: [],
                //used when creating random resources
                dynamicResourceDomain: ['http://example.org'],
                resourceReactor: ['Resource']
            }
        },
        property: {
            'generic': {
                propertyReactor: ['IndividualProperty'],
                //following are object-based scope:
                objectReactor: ['IndividualObject'],
                //to view/edit individual object values
                objectIViewer: ['BasicIndividualView'],
                objectIEditor: ['BasicIndividualInput'],
                extendedOEditor: ['BasicIndividualDetailEdit'],
                extendedOViewer: ['BasicIndividualDetailView'],
                shortenURI: 1
            }
        },
        //property value = object
        object: {
            'generic': {
                truncateURI: 1
            }
        },
        //---------depth 2------------
        dataset_resource: {

        },
        dataset_property: {
            //for configuration manager
            'http://ld-r.org/configurations': {
                'http://www.w3.org/2000/01/rdf-schema#label': {
                    allowPropertyDelete: 0,
                    label: ['Description'],
                    allowNewValue: 0
                },
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    isHidden: 0,
                    shortenURI: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope': {
                    hint: ['Determines the type of scope in LD-R'],
                    objectIEditor: ['BasicOptionInput'],
                    objectIViewer: ['BasicOptionView'],
                    options: [
                        {label: 'Dataset', value: 'D'},
                        {label: 'Resource', value: 'R'},
                        {label: 'Property', value: 'P'},
                        {label: 'Dataset-Resource', value: 'DR'},
                        {label: 'Dataset-Property', value: 'DP'},
                        {label: 'Resource-Property', value: 'RP'},
                        {label: 'Dataset-Resource-Property', value: 'DRP'},
                    ],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset': {
                    shortenURI: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resourceFocusType': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resourceLabelProperty': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#config': {
                    label: ['Configuration'],
                    allowExtension: 1,
                    hasBlankNode: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#label',
                                instances: [{value: 'Label', valueType: 'literal'}]
                            },
                            config: {
                                label: ['Label']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                                instances: [{value: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#FacetsPropertyConfig', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Type'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://example.com/prop1', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Property'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        }
                    ]
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#list': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#treatAsResourceType': {
                    label: ['Treat as Resource Type'],
                    hint: ['If set to true, will consider resource URI as type URI for resource'],
                    objectIViewer:['ToggleView'],
                    objectIEditor:['ToggleEdit'],
                    onValue: ['1'],
                    offValue: ['0'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#useReasoning': {
                    label: ['Use Reasoning?'],
                    objectIViewer:['ToggleView'],
                    objectIEditor:['ToggleEdit'],
                    onValue: ['1'],
                    offValue: ['0'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#host': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#port': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#path': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#graphName': {
                    label: ['Graph Name'],
                    hint: ['use "default" to consider all graph names'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType': {
                    label: ['Endpoint Type'],
                    allowNewValue: 0,
                    objectIEditor: ['BasicOptionInput'],
                    objectIViewer: ['BasicOptionView'],
                    allowUserDefinedValue: 1,
                    options: [
                        {label: 'ClioPatria', value: 'cliopatria'},
                        {label: 'Virtuoso', value: 'virtuoso'},
                        {label: 'Stardog', value: 'stardog'},
                        {label: 'Sesame', value: 'sesame'}
                    ]
                }
            },
            'http://risis.eu/genderc/applications': {
                'http://risis.eu/genderc/vocab/applicant': {
                    label: ['Applicant'],
                    objectIViewer: ['BasicLinkedIndividualView'],
                    linkedGraph: ['http://risis.eu/genderc/applicants']
                },
                'http://risis.eu/genderc/vocab/evaluation': {
                    label: ['Evaluation'],
                    objectIViewer: ['BasicLinkedIndividualView'],
                    linkedGraph: ['http://risis.eu/genderc/evaluations']
                },
                'http://risis.eu/genderc/vocab/grant': {
                    label: ['Grant'],
                    objectIViewer: ['BasicLinkedIndividualView'],
                    linkedGraph: ['http://risis.eu/genderc/grants']
                }
            },
            'http://risis.eu/wos': {
                  'http://risis.eu/wos/vocab/FN': { label: 'File type' },
                  'http://risis.eu/wos/vocab/VR': { label: 'File format version number' },
                  'http://risis.eu/wos/vocab/PT': { label: 'Publication type (e.g., book, journal, book in series)' },
                  'http://risis.eu/wos/vocab/AU': { label: 'Author(s)' },
                  'http://risis.eu/wos/vocab/AF': { label: 'Author Full Name', viewer: ['BasicLinkedIndividualView'] },
                  'http://risis.eu/wos/vocab/AR': { label: 'Article Number' },
                  'http://risis.eu/wos/vocab/BN': { label: 'International Standard Book Number (ISBN)' },
                  'http://risis.eu/wos/vocab/CA': { label: 'Group Authors' },
                  'http://risis.eu/wos/vocab/TI': { label: 'Article title' },
                  'http://risis.eu/wos/vocab/ED': { label: 'Editors' },
                  'http://risis.eu/wos/vocab/SO': { label: 'Full source title' },
                  'http://risis.eu/wos/vocab/HO': { label: 'International Standard Book Number (ISBN)' },
                  'http://risis.eu/wos/vocab/LA': { label: 'Language' },
                  'http://risis.eu/wos/vocab/DT': { label: 'Document type' },
                  'http://risis.eu/wos/vocab/NR': { label: 'Cited reference count' },
                  'http://risis.eu/wos/vocab/SN': { label: 'ISSN' },
                  'http://risis.eu/wos/vocab/SP': { label: 'Conference Sponsors' },
                  'http://risis.eu/wos/vocab/PU': { label: 'Publisher' },
                  'http://risis.eu/wos/vocab/C1': { label: 'Author address' },
                  'http://risis.eu/wos/vocab/CL': { label: 'Conference Location' },
                  'http://risis.eu/wos/vocab/CY': { label: 'Conference Date' },
                  'http://risis.eu/wos/vocab/CT': { label: 'Conference Title' },
                  'http://risis.eu/wos/vocab/D2': { label: 'Book Digital Object Identifier (DOI)' },
                  'http://risis.eu/wos/vocab/DE': {
                       label: 'Author keywords',
                       objectReactor: ['AggregateObject'],
                       objectAViewer: ['BasicAggregateView']
                   },
                  'http://risis.eu/wos/vocab/ID': {
                       label: 'KeyWords Plus',
                       objectReactor: ['AggregateObject'],
                       objectAViewer: ['BasicAggregateView']
                   },
                  'http://risis.eu/wos/vocab/AB': { label: 'Abstract' },
                  'http://risis.eu/wos/vocab/CR': { label: 'Cited references', objectIViewer: ['BasicLinkedIndividualView'] },
                  'http://risis.eu/wos/vocab/TC': { label: 'Times cited' },
                  'http://risis.eu/wos/vocab/BP': { label: 'Beginning page' },
                  'http://risis.eu/wos/vocab/BE': { label: 'Editors' },
                  'http://risis.eu/wos/vocab/BA': { label: 'Book Authors' },
                  'http://risis.eu/wos/vocab/EP': { label: 'Ending page' },
                  'http://risis.eu/wos/vocab/PG': { label: 'Page count' },
                  'http://risis.eu/wos/vocab/JI': { label: 'ISO source title abbreviation' },
                  'http://risis.eu/wos/vocab/SE': { label: 'Book series title' },
                  'http://risis.eu/wos/vocab/BS': { label: 'Book series subtitle' },
                  'http://risis.eu/wos/vocab/PY': { label: 'Publication year' },
                  'http://risis.eu/wos/vocab/P2': { label: 'Chapter Count (Book Citation Index)' },
                  'http://risis.eu/wos/vocab/PD': { label: 'Publication date' },
                  'http://risis.eu/wos/vocab/VL': { label: 'Volume' },
                  'http://risis.eu/wos/vocab/IS': { label: 'Issue' },
                  'http://risis.eu/wos/vocab/PN': { label: 'Part number' },
                  'http://risis.eu/wos/vocab/SU': { label: 'Supplement' },
                  'http://risis.eu/wos/vocab/SI': { label: 'Special issue' },
                  'http://risis.eu/wos/vocab/GA': { label: 'ISI document delivery number' },
                  'http://risis.eu/wos/vocab/GP': { label: 'Book Group Authors' },
                  'http://risis.eu/wos/vocab/PI': { label: 'Publisher city' },
                  'http://risis.eu/wos/vocab/WP': { label: 'Publisher web address' },
                  'http://risis.eu/wos/vocab/RP': { label: 'Reprint address' },
                  'http://risis.eu/wos/vocab/CP': { label: 'Cited patent' },
                  'http://risis.eu/wos/vocab/J9': { label: '29-character source title abbreviation' },
                  'http://risis.eu/wos/vocab/PA': { label: 'Publisher address' },
                  'http://risis.eu/wos/vocab/UT': { label: 'Unique Tag (ISI unique article identifier)' },
                  'http://risis.eu/wos/vocab/DI': { label: 'Digital Object Identifier (DOI)' },
                  'http://risis.eu/wos/vocab/EM': { label: 'Email address' },
                  'http://risis.eu/wos/vocab/FU': { label: 'Funding Agency and Grant Number' },
                  'http://risis.eu/wos/vocab/SC': { label: 'Subject Category' },
                  'http://risis.eu/wos/vocab/FX': { label: 'Funding Text' },
                  'http://risis.eu/wos/vocab/WC': { label: 'Web of Science Category' },
                  'http://risis.eu/wos/vocab/Z9': { label: 'Total Times Cited Count (WoS, BCI, and CSCD)' },
                  'http://risis.eu/wos/vocab/ER': { label: 'End of record' },
                  'http://risis.eu/wos/vocab/EF': { label: 'End of file' }

            },
            'http://risis.eu/cordisH2020': {
                'http://risis.eu/cordisH2020/vocab/projectParticipant': {
                    label: ['Participants'],
                    objectIViewer: ['BasicLinkedIndividualView'],
                    extensions: [
                {
                            spec: {
                                propertyURI: 'http://risis.eu/cordisH2020/resource/organizationType',
                                instances: [{value: 'http://exampleProperty.org', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Organization Type'],
                                objectIViewer: ['BasicLinkedIndividualView']
                            }
                        }
                    ]
                },
                'http://risis.eu/cordisH2020/resource/organizationType': {
                    label: ['Organization Type'],
                    objectIViewer: ['BasicLinkedIndividualView']
                },
                'http://risis.eu/cordisH2020/vocab/fundingScheme': {
                    label: ['Funding Scheme'],
                    objectIViewer: ['BasicLinkedIndividualView']
                },
                'http://risis.eu/cordisH2020/vocab/legalBasis': {
                    label: ['Legal Basis'],
                    objectIViewer: ['BasicLinkedIndividualView']
                },
                'http://risis.eu/cordisH2020/vocab/topic': {
                    label: ['Topic'],
                    objectIViewer: ['BasicLinkedIndividualView']
                },
                'http://risis.eu/cordisH2020/vocab/projectParticipation': {
                    label: ['Project Participation'],
                    extensions: [
                        {
                        spec: {
                                propertyURI: 'http://risis.eu/cordisH2020/vocab/signedGrant',
                                instances: [{value: 'http://exampleProperty.org', valueType: 'uri'}]
                            },
                        config: {
                                label: ['Signed Grant'],
                                objectIViewer: ['BasicLinkedIndividualView']
                            }
                        }
                    ]
                }
            },
            'http://risis.eu/dataset/Eter': {
                'http://risis.eu/eter/vocab/institutionCategory':{
                    label: ['Category']
                },
                'http://risis.eu/eter/vocab/fundationYear':{
                    label: ['Fundation Year']
                },
                'http://risis.eu/eter/vocab/hasUniversityHospital':{
                    label: ['Has Hospital?']
                },
                'http://risis.eu/eter/vocab/institutionCategoryStandardized':{
                    label: ['Standard Category']
                },
                'http://www.geonames.org/ontology#countryCode':{
                    label: ['Country'],
                    objectIViewer: ['TwoLetterCountryView']
                },
                'http://www.w3.org/2000/01/rdf-schema#label':{
                    label: ['Name of the institute']
                },
                'http://www.w3.org/2009/08/skos-reference/skos.html#prefLabel':{
                    label: ['Native name of the institute']
                },
                'http://www.w3.org/2003/01/geo/wgs84_pos#lat':{
                    label: ['Latitude']
                },
                'http://www.w3.org/2003/01/geo/wgs84_pos#long':{
                    label: ['Longitude']
                },
                'http://risis.eu/eter/vocab/isMultiSite':{
                    label: ['Has multiple sites?']
                }
            },
            'http://rdf.risis.eu/sms/users.ttl#': {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    isHidden: 1
                },
                'http://xmlns.com/foaf/0.1/accountName': {
                    label: ['Username'],
                    readOnly: 1
                },
                'http://xmlns.com/foaf/0.1/firstName': {
                    label: ['First Name']
                },
                'http://xmlns.com/foaf/0.1/lastName': {
                    label: ['Last Name']
                },
                'http://xmlns.com/foaf/0.1/mbox': {
                    label: ['Email Address'],
                    readOnly: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#password': {
                    label: ['Password'],
                    objectIViewer: ['PasswordView'],
                    objectIEditor: ['PasswordInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#editorOfGraph': {
                    label: ['Editor of Graph'],
                    allowNewValue: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#editorOfResource': {
                    label: ['Editor of Resource'],
                    allowNewValue: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#editorOfProperty': {
                    label: ['Editor of Property'],
                    allowNewValue: 1,
                    allowExtension: 1,
                    hasBlankNode: 1,
                    autoLoadDetails: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource',
                                instances: [{value: 'http://exampleResource.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Resource URI under which the property is exposed.'],
                                label: ['Resource']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://exampleProperty.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Property URI'],
                                label: ['Property']
                            }
                        }
                    ]
                },
                'http://xmlns.com/foaf/0.1/organization': {
                    label: ['Organization'],
                    allowNewValue: 1,
                    objectIViewer: ['BasicDBpediaView'],
                    objectIEditor: ['DBpediaInput']
                }
            }
        },
        dataset_object: {

        },
        resource_property: {

        },
        resource_object: {

        },
        property_object: {

        },
        //---------depth 3------------
        dataset_resource_property: {

        },
        dataset_resource_object: {

        },
        dataset_property_object: {

        },
        resource_property_object: {

        },
        //---------depth 4------------
        dataset_resource_property_object: {

        }
    }
};
