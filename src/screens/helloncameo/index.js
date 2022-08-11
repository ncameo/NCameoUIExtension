import React, { Component } from 'react';


class HelloNcameo extends Component {
    render() {
        const { data, token } = this.props;
        return (
            <div>
                <h5>Welcome to No-Code Solutions. </h5>
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
            </div>
        );
    }
}

export default HelloNcameo;