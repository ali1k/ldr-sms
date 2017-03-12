'use strict';
import React from 'react';
import {NavLink} from 'fluxible-router';

class DataIngestion extends React.Component {
    render() {
        return (
            <div className="ui page grid" ref="home">
              <div className="ui row">
                <div className="column">
                    <div className="ui massive breadcrumb">
                      <NavLink routeName="home" className="section" href="/">SMS Platform</NavLink>
                      <i className="right chevron icon divider"></i>
                      <div className="active section">Data Ingestion</div>
                    </div>
                    <div className="ui segment">
                      <img className="ui medium right floated image bordered animated pulse" src="/assets/img/docs/ingestion.png" />
                      <p style={{textAlign: 'justify', fontSize: '1.2em'}}>
                          te
                      </p>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = DataIngestion;
