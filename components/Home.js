'use strict';
var React = require('react');

class Home extends React.Component {
    render() {
        return (
            <div className="ui page grid" ref="home">
              <div className="ui row">
                <div className="column">
                    <div className="ui segment content">
                        <h2 className="ui header">Welcome to SMS Platform!</h2>
                            <p>
                                <a href="http://sms.risis.eu"><img className="ui centered image bordered" src="/assets/img/workflow.jpg" alt="SMS" /></a>
                            </p>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = Home;
