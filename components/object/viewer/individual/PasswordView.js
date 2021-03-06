import React from 'react';
/**
replaces sensitive object values with a given character
*/
class PasswordView extends React.Component {
    render() {
        let outputDIV, secretChar = '*';
        if(this.props.secretChar){
            secretChar = this.props.secretChar;
        }
        outputDIV = <span> {Array(30).join(secretChar)} </span>;
        return (
            <div className="ui" ref="passwordView">
                {outputDIV}
            </div>
        );
    }
}
PasswordView.propTypes = {
    /**
    Character used to replace the sensitive value
    */
    secretChar: React.PropTypes.string,
};
export default PasswordView;
