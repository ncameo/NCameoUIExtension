import React, { Component } from 'react';
import mainLogo from'../../images/picture.svg';

// const envVariables = process.env;
class HelloNcameo extends Component {
    render() {
        const { data, token } = this.props;
        debugger;
        return (
            <div>
                <h5>Welcome to No-Code Solutions. </h5>
                <img  src={mainLogo} alt="fireSpot"/>
                <br />
                name : {token.user.name}
                <br />
                email : {token.user.email}
                <br />
                Roles : {JSON.stringify(token.user.roles)}
                <br />
                data : {JSON.stringify(data)}
                <br />
                AccessToken : {token.accesstoken}
                <br />
                expiresOn : {token.expiresOn}
                <br />
                REACT_APP_CLIENT_ID : {process.env.REACT_APP_APP_TITLE}
                <br />
                {/* REACT_APP_KEY : {envVariables.REACT_APP_KEY}
                <br />
                REACT_APP_APPLICATION_API_URL : {envVariables.REACT_APP_APPLICATION_API_URL} */}
                <br />
            </div>
        );
    }
}

export default HelloNcameo;