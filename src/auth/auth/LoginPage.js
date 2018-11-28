import React from 'react'
import PropTypes from "prop-types"

import { Modal, Button } from 'react-materialize'


import { config, history } from '../config.js';
import { LoggedIn, LoggedOut, login, logout } from './AuthService';
import axios from 'axios'

import FacebookProvider, { Login } from 'react-facebook';
import GoogleLogin from 'react-google-login';

import Appbar from '../navbar/Appbar';

require ('./Login.scss')


const classes = {

    field: {
        marginLeft: 20,
        width: '330px'
    },

    customContentStyle: {
        width: '400px',
        maxWidth: 'none',
    },

    pink: {
        color: '#FF5E63',
        borderColor: '#FF5E63'
    },

    grey: {
        color: '#EDEFED',
    },
};


class LoginPage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            email: null,
            password: null,
        };
    }

    onSuccessResponse = (response) => {
        const self = this
        console.log(response);
        login(response).then(response => {
            self.handleClose();
        });
    }

    onFacebookResponse = (response) => {
        this.onSuccessResponse(Object.assign({provider: 'facebook'}, response))
    }

    onGoogleResponse = (response) => {
        this.onSuccessResponse(Object.assign({provider: 'google'}, response))
    }

    onError = (error) => {
        console.log(error);
    }

    onGoogleError = (error) => {
        this.onError(error);
    }

    onFacebookError = (error) => {
        this.onError(error)
    }



    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    onEmail = (e) => {
        console.log(e.keyCode)
        this.setState({email: e.target.value});
    }

    onPassword = (e) => {
        console.log(e.keyCode)
        this.setState({password: e.target.value})
    }

    submitLogin = () => {
        console.log('browserHistory: ', history)
        this.setState({open: false});

        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        }).then(function (response, err) {
            if(err) {
                console.log(err)
            }
            console.log('response: ', response);

            history.push('/profile/');
        })
    }

    render() {
        return (
            <React.Fragment>
                <Appbar />
                <div class="login-section">
                    <FacebookProvider appId={config.facebookAppId}>
                        <Login
                            scope="email"
                            onResponse={this.onFacebookResponse}
                            onError={this.onFacebookError}
                        >
                            <Button className='login-btn facebook-btn'>Continue with Facebook</Button>
                        </Login>
                    </FacebookProvider>
                </div>
            </React.Fragment>
        );
    }
}

/*
 <GoogleLogin
 clientId="982402783222-r3d8e413fb9dbdfhu3kn574e5h71h5c5.apps.googleusercontent.com"
 buttonText="Continue with Google"
 onSuccess={this.onGoogleResponse}
 onFailure={this.onGoogleError}
 className="login-btn google-btn"/>
 */

export default LoginPage;