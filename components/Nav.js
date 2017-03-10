'use strict';
import React from 'react';
import {NavLink} from 'fluxible-router';
import {appFullTitle, appShortTitle, enableAuthentication, enableDynamicReactorConfiguration,enableDynamicServerConfiguration,enableDynamicfacetsConfiguration, configDatasetURI} from '../configs/general';

class Nav extends React.Component {
    componentDidMount(){
        let currentComp = this.refs.defaultNavbar;
        $(currentComp).find('.ui.dropdown').dropdown();
    }
    showHelpModal() {
        /*global $*/
        $('.ui.modal').modal('show');
    }
    render() {
        let user = this.context.getUser();
        // console.log(user);
        let userMenu;
        let configMenu = <a href={'/browse/' + encodeURIComponent(configDatasetURI)} className="ui item link" title="Configuration Manager">
            <i className="ui black settings icon"></i>
        </a>;
        if(enableAuthentication){
            if(user){
                userMenu = <div className="ui right dropdown item">
                                {user.accountName} <i className="dropdown icon"></i>
                                <div className="menu">
                                    <NavLink className="item" routeName="resource" href={'/dataset/' + encodeURIComponent(user.datasetURI) + '/resource/' + encodeURIComponent(user.id)}>Profile</NavLink>
                                    {parseInt(user.isSuperUser) ? <NavLink className="item" routeName="users" href="/users">Users List</NavLink> : ''}
                                    <a href="/logout" className="item">Logout</a>
                                </div>
                            </div>;
            }else{
                configMenu = '';

                userMenu = <div className="ui right item"> <a className="ui mini circular teal button" href="/login">Sign-in</a> &nbsp;  <a href="http://datasets.risis.eu/register" className="ui mini circular yellow button">Register</a> </div>;

            }
        }
        return (
            <nav ref="defaultNavbar" className="ui blue menu inverted navbar page grid">
                    <NavLink routeName="home" className="brand item" href='/'>
                        {this.props.loading ? <img src="/assets/img/loader.gif" alt="loading..." style={{height: 30, width: 30}} /> : <img style={{height: 22, width: 35}} className="ui mini image" src="/assets/img/sms_logo_t.png" alt="SMS" />}
                    </NavLink>
                    <NavLink routeName="about" className="item" href="/contact"> Contact Us</NavLink>
                    <NavLink routeName="metadataList" className="item" href="/metadataList"> Metadata</NavLink>
                    <NavLink routeName="datasets" className="item" href="/datasets"> Datasets</NavLink>
                    <div className="right menu">
                        <div className="item link" onClick={this.showHelpModal}>
                                <i className="small help circle icon"></i>
                        </div>
                        {(enableDynamicReactorConfiguration || enableDynamicServerConfiguration || enableDynamicfacetsConfiguration) ?
                            configMenu
                        : ''}
                        {userMenu}
                    </div>
            </nav>
        );
    }
}
Nav.contextTypes = {
    getUser: React.PropTypes.func
};
export default Nav;
