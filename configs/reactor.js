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
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#cloneOf': {
                readOnly: 1,
                allowPropertyDelete: 0
            },
            'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                allowPropertyDelete: 0,
                objectIViewer: ['PrefixBasedView'],
                objectIEditor: ['PrefixBasedInput']
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy' : {
                isHidden: 0,
                allowNewValue: 0,
                allowPropertyDelete: 0,
                readOnly: 1,
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdOn' : {
                isHidden: 0,
                allowNewValue: 0,
                allowPropertyDelete: 0,
                readOnly: 1,
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
            'http://rdf.risis.eu/sms/users.ttl#': {
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#User' :{
                    treatAsResourceType: 1,
                    resourceReactor: ['UserResource']
                }
            }
        },
        dataset_property: {
            'http://geo.risis.eu/cbs-nl': {
                'http://geo.risis.eu/vocabulary/cbs-nl/P_25_44_JR': {hint: ['Percentage personen 25 tot 45 jaar']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_45_64_JR': {hint: ['Percentage personen 45 tot 65 jaar']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_65_EO_JR': {hint: ['Percentage personen 65 jaar en ouder']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_ONGEHUWD': {hint: ['Percentage ongehuwd']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_GEHUWD': {hint: ['Percentage gehuwd']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_GESCHEID': {hint: ['Percentage gescheid']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_VERWEDUW': {hint: ['Percentage verweduwd']},
                'http://geo.risis.eu/vocabulary/cbs-nl/GEBOO_TOT': {hint: ['Geboorte totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_GEBOO': {hint: ['Geboorte relatief']},
                'http://geo.risis.eu/vocabulary/cbs-nl/STERFT_TOT': {hint: ['Sterfte totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_STERFT BEV_DICHTH': {hint: ['Sterfte relatief Bevolkingsdichtheid inwoners per km2']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AANTAL_HH': {hint: ['Aantal huishoudens']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_EENP_HH': {hint: ['Percentage   eenpersoonshuishoudens']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_HH_Z_K': {hint: ['Percentage huishoudens zonder kinderen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_HH_M_K': {hint: ['Percentage huishoudens met kinderen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/GEM_HH_GR': {hint: ['Gemiddelde   huishoudensgrootte']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_WEST_AL': {hint: ['Percentage westerse allochtonen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_N_W_AL': {hint: ['Percentage niet westerse allochtonen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_MAROKKO': {hint: ['Percentage uit Marokko']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_ANT_ARU': {hint: ['Percentage uit Nederlandse Antillen en Aruba']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_SURINAM': {hint: ['Percentage uit Suriname']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_TURKIJE': {hint: ['Percentage uit Turkije']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_OVER_NW': {hint: ['Percentage overige niet westerse allochtonen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BEDV': {hint: ['Aantal bedrijfsvestigingen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BED_A': {hint: ['Aantal bedrijven landbouw, bosbouw, visserij']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BED_BF': {hint: ['Aantal bedrijven nijverheid, energie']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BED_GI': {hint: ['Aantal bedrijven handel en horeca']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BED_HJ': {hint: ['Aantal bedrijven Vervoer, informatie, communicatie']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BED_KL': {hint: ['Aantal bedrijven financie��l, onroerend goed']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BED_MN': {hint: ['Aantal bedrijven zakelijke dienstverlening']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BED_RU': {hint: ['Aantal bedrijven cultuur, recreatie, overige']},
                'http://geo.risis.eu/vocabulary/cbs-nl/WONINGEN': {hint: ['Woningvoorraad']},
                'http://geo.risis.eu/vocabulary/cbs-nl/WOZ': {hint: ['Gemiddelde   woningwaarde']},
                'http://geo.risis.eu/vocabulary/cbs-nl/p_1gezw': {hint: ['Percentage   eengezinswoning']},
                'http://geo.risis.eu/vocabulary/cbs-nl/p_mgezw': {hint: ['Percentage   meergezinswoning']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_KOOPWON': {hint: ['Percentage   koopwoningen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_HUURWON': {hint: ['Percentage   huurwoningen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_WONV2000': {hint: ['Percentage bouwjaarklasse vanaf 2000']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_WONT2000': {hint: ['Percentage bouwjaarklasse tot 2000']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_HUKO_ONB': {hint: ['Percentage Woningen met eigendom onbekend']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_GAS_TOT': {hint: ['Gemiddeld gasverbruik totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_GAS_APP': {hint: ['Gemiddeld gasverbruik appartement ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_GAS_TUS ': {hint: ['Gemiddeld gasverbruik tussenwoning  ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_GAS_HOEK': {hint: ['Gemiddeld gasverbruik hoekwoning      ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_GAS_21K': {hint: ['Gemiddeld gasverbruik 2 onder 1 kap woning      ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_GAS_VRY': {hint: ['Gemiddeld gasverbruik vrijstaande woning']},
                'http://geo.risis.eu/vocabulary/cbs-nl/g_gas_hu': {hint: ['Gemiddeld gasverbruik huurwoning  ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/g_gas_ko': {hint: ['Gemiddeld gasverbruikkoopwoning  ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_STADVERW': {hint: ['Aandeel stadsverwarming   ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_ELEK_TOT': {hint: ['Gemiddeld elektriciteitsverbruik totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_ELEK_APP ': {hint: ['Gemiddeld elektriciteitsverbruik appartement']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_ELEK_HOE ': {hint: ['elektriciteitsverbruik hoekwoning Gem elektriciteitsverbruik 2 onder']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_ELEK_21K ': {hint: ['1 kap woning Gem elektriciteitsverbruik vrijstaande woning ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_ELEK_VRY': {hint: ['Gemiddeld elektriciteitsverbruik huurwoning Gemiddeld  ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/G_ELEK_TUS': {hint: ['Gemiddeld elektriciteitsverbruik tussenwoning Gemiddeld ']},
                'http://geo.risis.eu/vocabulary/cbs-nl/g_ele_hu g_ele_ko': {hint: ['elektriciteitsverbruikkoopwoning']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AANT_INK2': {hint: ['Aantal inkomensontvangers']},
                'http://geo.risis.eu/vocabulary/cbs-nl/INK_ONTV2': {hint: ['Gemiddeld inkomen per inkomensontvanger']},
                'http://geo.risis.eu/vocabulary/cbs-nl/INK_INW2': {hint: ['Gemiddeld inkomen per inwoner']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_LAAGINKP': {hint: ['Percentage personen met laagste inkomen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_HOOGINKP': {hint: ['Percentage personen met hoogste inkomen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_LAAGINKH': {hint: ['Percentage huishoudens met laagste inkomen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_HOOGINKH': {hint: ['Percentage huishoudens met hoogste inkomen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_LIK_HH': {hint: ['percentage huishoudens met een laag inkomen']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_SOCMINH': {hint: ['Perc huishoudens onder of rond sociaal minimum']},
                'http://geo.risis.eu/vocabulary/cbs-nl/P_ACTIEF': {hint: ['percentage actieven']},
                'http://geo.risis.eu/vocabulary/cbs-nl/WWB_UITTOT': {hint: ['Algemene bijstandsuitkeringen totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/a_soz_ow': {hint: ['Aantal personen met een AOW-uitkering totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AO_UIT_TOT': {hint: ['AO uitkeringen totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/WW_UIT_TOT': {hint: ['WW uitkeringen totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AUTO_TOT': {hint: ['Personenauto s totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AUTO_HH AUTO_LAND': {hint: ['Personenauto s per huishouden Personenauto s per km2']},
                'http://geo.risis.eu/vocabulary/cbs-nl/BEDR_AUTO': {hint: ['Bedrijfsmotorvoertuigen   totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/MOTOR_2W': {hint: ['Motortweewielers totaal']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_LFTJ6J': {hint: ['Aantal personenauto���s jonger dan 6 jaar']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_LFTO6J': {hint: ['Aantal personenauto���s 6 jaar en ouder']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BST_B': {hint: ['Aantal personenauto���s met brandstof benzine']},
                'http://geo.risis.eu/vocabulary/cbs-nl/A_BST_NB': {hint: ['Aantal personenauto���s met overige brandstof']},
                'http://geo.risis.eu/vocabulary/cbs-nl/OPP_TOT': {hint: ['Oppervlakte totaal in ha']},
                'http://geo.risis.eu/vocabulary/cbs-nl/OPP_LAND': {hint: ['Oppervlakte land in ha']},
                'http://geo.risis.eu/vocabulary/cbs-nl/OPP_WATER': {hint: ['Oppervlakte water in ha']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ARTSPR': {hint: ['Huisartsenpraktijk gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV1_ARTSPR': {hint: ['Huisartsenpraktijk gemiddeld aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_ARTSPR': {hint: ['Huisartsenpraktijk gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_ARTSPR': {hint: ['Huisartsenpraktijk gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_APOTH': {hint: ['Apotheek gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ZIEK_I': {hint: ['Ziekenhuis incl buitenpolikliniek gem afst in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_ZIEK_I': {hint: ['Ziekenhuis incl buitenpoli gem aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10ZIEK_I': {hint: ['Ziekenhuis incl buitenpoli gem aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV20ZIEK_I': {hint: ['Ziekenhuis incl buitenpoli gem aantal binnen 20 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ZIEK_E': {hint: ['Ziekenhuis excl buitenpolikliniek gem afst in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_ZIEK_E': {hint: ['Ziekenhuis excl buitenpoli gem aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10ZIEK_E': {hint: ['Ziekenhuis excl buitenpoli gem aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV20ZIEK_E': {hint: ['Ziekenhuis excl buitenpoli gem aantal binnen 20 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_SUPERM': {hint: ['Grote supermarkt gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV1_SUPERM': {hint: ['Grote supermarkt gemiddeld aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_SUPERM': {hint: ['Grote supermarkt gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_SUPERM': {hint: ['Grote supermarkt gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_DAGLMD': {hint: ['Winkels ov. dagelijkse levensm. gem afst in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV1_DAGLMD': {hint: ['Winkels ov. dagel. levensm. gem aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_DAGLMD': {hint: ['Winkels ov. dagel. levensm. gem aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_DAGLMD': {hint: ['Winkels ov. dagel. levensm. gem aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_WARENH': {hint: ['Warenhuis gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_WARENH': {hint: ['Warenhuis gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10WARENH': {hint: ['Warenhuis gemiddeld aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV20WARENH': {hint: ['Warenhuis gemiddeld aantal binnen 20 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_CAFE': {hint: ['Caf�� gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV1_CAFE': {hint: ['Caf�� gemiddeld aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_CAFE': {hint: ['Caf�� gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_CAFE': {hint: ['Caf�� gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_CAFTAR': {hint: ['Cafetaria gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV1_CAFTAR': {hint: ['Cafetaria gemiddeld aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_CAFTAR': {hint: ['Cafetaria gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_CAFTAR': {hint: ['Cafetaria gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_RESTAU': {hint: ['Restaurant gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV1_RESTAU': {hint: ['Restaurant gemiddeld aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_RESTAU': {hint: ['Restaurant gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_RESTAU': {hint: ['Restaurant gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_HOTEL': {hint: ['Hotel gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_HOTEL': {hint: ['Hotel gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10_HOTEL': {hint: ['Hotel gemiddeld aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV20_HOTEL': {hint: ['Hotel gemiddeld aantal binnen 20 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_KDV': {hint: ['Kinderdagverblijf gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV1_KDV': {hint: ['Kinderdagverblijf gemiddeld aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_KDV': {hint: ['Kinderdagverblijf gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_KDV': {hint: ['Kinderdagverblijf gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_BSO': {hint: ['Buitenschoolse opvang gem afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV1_BSO': {hint: ['Buitenschoolse opvang gemiddeld aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_BSO': {hint: ['Buitenschoolse opvang gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_BSO': {hint: ['Buitenschoolse opvang gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ONDBAS': {hint: ['Basisonderwijs gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV1_ONDBAS': {hint: ['Basisonderwijs aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_ONDBAS': {hint: ['Basisonderwijs aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_ONDBAS': {hint: ['Basisonderwijs aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ONDVRT': {hint: ['Voortgezet onderwijs gem afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_ONDVRT': {hint: ['Voortgezet onderwijs gemiddeld aantal binnen 1 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_ONDVRT': {hint: ['Voortgezet onderwijs gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10ONDVRT': {hint: ['Voortgezet onderwijs gemiddeld aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ONDVMB': {hint: ['Vmbo gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_ONDVMB': {hint: ['Vmbo gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_ONDVMB': {hint: ['Vmbo gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10ONDVMB': {hint: ['Vmbo gemiddeld aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ONDHV': {hint: ['Havo vwo gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV3_ONDHV': {hint: ['Havo vwo gemiddeld aantal binnen 3 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_ONDHV': {hint: ['Havo vwo gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10_ONDHV': {hint: ['Havo vwo gemiddeld aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_OPRITH': {hint: ['Oprit hoofdverkeersweg gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_TREINST': {hint: ['Treinstation gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_OVERST': {hint: ['Overstapstation gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_BIBLIO': {hint: ['Bibliotheek gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ZWEMB': {hint: ['Zwembad gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_IJSBAAN': {hint: ['Kunstijsbaan gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_PODIUM': {hint: ['Theater gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_PODIUM': {hint: ['Theater gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10PODIUM': {hint: ['Theater gemiddeld aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV20PODIUM': {hint: ['Theater gemiddeld aantal binnen 20 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_BIOS': {hint: ['Bioscoop gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV5_BIOS': {hint: ['Bioscoop gemiddeld aantal binnen 5 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10_BIOS': {hint: ['Bioscoop gemiddeld aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV20_BIOS': {hint: ['Bioscoop gemiddeld aantal binnen 20 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_SAUNA': {hint: ['Sauna gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ZONBNK': {hint: ['Zonnebank gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_ATTRAC': {hint: ['Attractiepark gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV10ATTRAC': {hint: ['Attractiepark gemiddeld aantal binnen 10 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV20ATTRAC': {hint: ['Attractiepark gemiddeld aantal binnen 20 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AV50ATTRAC': {hint: ['Attractiepark gemiddeld aantal binnen 50 km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_POP': {hint: ['Poppodium gemiddelde afstand in km']},
                'http://geo.risis.eu/vocabulary/cbs-nl/AF_BRANDW': {hint: ['Brandweerkazerne gemiddelde afstand in km']}
            },
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
