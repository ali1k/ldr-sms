'use strict';
var React = require('react');

class Home extends React.Component {
    render() {
        return (
            <div className="ui page grid" ref="home">
              <div className="ui row">
                <div className="column">
                    <h1>Welcome to SMS Platform.</h1>
                    <div className="ui segment">
                      <img className="ui medium right floated image bordered" src="/assets/img/docs/goal.jpeg" />
                      <p style={{textAlign: 'justify', fontSize: '1.2em'}}>
                          Up to now, <b>STI</b> (<b>S</b>cience, <b>T</b>echnology, <b>I</b>nnovation) studies are either rich but small scale (qualitative case studies) or large scale and under-complex – because they generally use only a single dataset like <a target="_blank" href="http://www.epo.org/searching-for-patents/business/patstat.html">Patstat</a>, <a target="_blank" href="https://www.scopus.com">Scopus</a>, <a target="_blank" href="http://www.isiknowledge.com/">WoS (Web of Science)</a>, <a target="_blank" href="http://www.oecd.org/">OECD</a> STI indicators, etc., and therefore deploying only a few variables – determined by the data available. However, progress in the STI research field depends in our view on the ability to do <b>large-scale</b> studies with often many variables specified by relevant theories: There is a need for studies which are at the same time big and rich. To enable that, combining and integration of STI data and beyond is needed – in order to exploit the huge amount of data that are ‘out there’ in an innovative and meaningful way. <br/>The aim of the <b>S</b>emantically <b>M</b>aping <b>S</b>cience (SMS) platform as the technical core within the <a target="_blank" href="https://risis.eu">RISIS EU project</a> is to produce richer data to be used in social research – through the integration of heterogeneous datasets, ranging from tabular statistical data to unstructured data found on the Web.

                      </p>
                    </div>
                    <div className="ui three cards">
                      <div className="green card">
                          <div className="content center aligned">
                            <a className="header">Data Ingestion</a>
                          </div>
                        <div className="image">
                          <img src="/assets/img/docs/ingestion.png"/>
                        </div>
                      </div>
                      <div className="green card">
                          <div className="content center aligned">
                            <a className="header">Linked Data Services & Applications</a>
                          </div>
                        <div className="image">
                          <img src="/assets/img/docs/sa.png"/>
                        </div>
                      </div>
                      <div className="blue card">
                        <div className="content center aligned">
                          <a className="header">Demos</a>
                        </div>
                        <div className="image">
                          <img src="/assets/img/docs/demos.jpg"/>
                        </div>
                        <div className="content center aligned">
                          <a className="header">Use Cases</a>
                        </div>
                        <div className="image">
                          <img src="/assets/img/docs/usecases.jpg"/>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = Home;
