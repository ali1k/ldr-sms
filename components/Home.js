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
                      <img className="ui medium right floated image bordered animated pulse" src="/assets/img/docs/goal.jpeg" />
                      <p style={{textAlign: 'justify', fontSize: '1.2em'}}>
                          Up to now, <b>STI</b> (<b>S</b>cience, <b>T</b>echnology, <b>I</b>nnovation) studies are either rich but small scale (qualitative case studies) or large scale and under-complex – because they generally use only a single dataset like <a target="_blank" href="http://www.epo.org/searching-for-patents/business/patstat.html">Patstat</a>, <a target="_blank" href="https://www.scopus.com">Scopus</a>, <a target="_blank" href="http://www.isiknowledge.com/">WoS (Web of Science)</a>, <a target="_blank" href="http://www.oecd.org/">OECD</a> STI indicators, etc., and therefore deploying only a few variables – determined by the data available. However, progress in the STI research field depends in our view on the ability to do <b>large-scale</b> studies with often many variables specified by relevant theories: There is a need for studies which are at the same time big and rich. To enable that, combining and integration of STI data and beyond is needed – in order to exploit the huge amount of data that are ‘out there’ in an innovative and meaningful way. <br/>The aim of the <b>S</b>emantically <b>M</b>aping <b>S</b>cience (SMS) platform as the technical core within the <a target="_blank" href="https://risis.eu">RISIS EU project</a> is to produce richer data to be used in social research – through the integration of heterogeneous datasets, ranging from tabular statistical data to unstructured data found on the Web.

                      </p>
                    </div>
                    <div className="ui three cards">
                      <div className="green card slideInUp animated">
                          <div className="content center aligned">
                            <a className="header">Data Ingestion</a>
                          </div>
                        <div className="image">
                          <img src="/assets/img/docs/ingestion.png"/>
                        </div>
                      </div>
                      <div className="green card slideInUp animated">
                          <div className="content center aligned">
                            <a className="header">Linked Data Services & Applications</a>
                          </div>
                        <div className="image">
                          <img src="/assets/img/docs/sa.png"/>
                        </div>
                      </div>
                      <div className="blue card slideInUp animated">
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
                    <div className="ui segment">
                        <h2>Quick Links:</h2>
                        <div className="ui list">
                          <div className="item">
                            <i className="external green icon"></i>
                            <div className="content">
                              <a className="header" href="http://risis.eu" target="_blank">RISIS Project Website</a>
                              <div className="description">RISIS EU project aims to build a distributed infrastructure on data relevant for research and innovation dynamics and policies.</div>
                            </div>
                          </div>
                          <div className="item">
                            <i className="external green icon"></i>
                            <div className="content">
                              <a className="header" href="http://datasets.risis.eu" target="_blank">RISIS Datasets Portal</a>
                              <div className="description">A portal with list of metadata about RISIS datasets where users can request for access/visit to a dataset.</div>
                            </div>
                          </div>
                          <div className="item">
                            <i className="file pdf green icon"></i>
                            <div className="content">
                              <a className="header" href="/assets/pdf/sms_documentation.pdf" target="_blank">SMS Platform Documentation</a>
                              <div className="description">Complete documentation of SMS platform.</div>
                            </div>
                          </div>
                          <div className="item">
                            <i className="external green icon"></i>
                            <div className="content">
                              <a className="header" href="http://api.sms.risis.eu" target="_blank">SMS Linked Data APIs</a>
                              <div className="description">List of exposed SMS Web APIs with documentation.</div>
                            </div>
                          </div>
                          <div className="item">
                            <i className="github green icon"></i>
                            <div className="content">
                              <a className="header" href="https://github.com/risis-eu" target="_blank">SMS/RISIS Github Repositories</a>
                              <div className="description">Open source code of RISIS platforms.</div>
                            </div>
                          </div>
                          <div className="item">
                            <i className="wizard green icon"></i>
                            <div className="content">
                              <a className="header" href="http://ld-r.org" target="_blank">Linked Data Reactor</a>
                              <div className="description">An open source software framework which empowers SMS platform for linked data view, browse and editing.</div>
                            </div>
                          </div>
                          <div className="item">
                            <i className="youtube green icon"></i>
                            <div className="content">
                              <a className="header" href="https://www.youtube.com/watch?list=PLg3CFD-pkOFs3dt-mABKpi-NmCJjSZvE_&v=H76afW67qy8" target="_blank">SMS Youtube Channel</a>
                              <div className="description">A list of tutorials on how to use SMS services and applications.</div>
                            </div>
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
