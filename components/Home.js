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
                      <img className="ui medium right floated image" src="/assets/img/docs/goal.jpeg" />
                      <p style={{textAlign: 'justify', fontSize: '1.2em'}}>
                          Up to now, <b>STI</b> (<b>S</b>cience, <b>T</b>echnology, <b>I</b>nnovation) studies are either rich but small scale (qualitative case studies) or large scale and under-complex – because they generally use only a single dataset like <a target="_blank" href="http://www.epo.org/searching-for-patents/business/patstat.html">Patstat</a>, <a target="_blank" href="https://www.scopus.com">Scopus</a>, <a target="_blank" href="http://www.isiknowledge.com/">WoS (Web of Science)</a>, <a target="_blank" href="http://www.oecd.org/">OECD</a> STI indicators, etc., and therefore deploying only a few variables – determined by the data available. However, progress in the STI research field depends in our view on the ability to do <b>large-scale</b> studies with often many variables specified by relevant theories: There is a need for studies which are at the same time big and rich. To enable that, combining and integration of STI data and beyond is needed – in order to exploit the huge amount of data that are ‘out there’ in an innovative and meaningful way. That is why the core of the SMS platform is the conversion of different heterogenious STI-related datasets into a standard open format which allows interlinking of data across multiple domains.

                      </p>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = Home;
