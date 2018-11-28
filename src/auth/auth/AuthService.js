import React from 'react'
import { config, history } from '../config.js'
import axios from 'axios'

const ID_TOKEN_KEY = 'djcal';

var bearer = null;
var loggedInUser = null;
var myCalendar = 0;


function login(response) {
    var promise = new Promise(function(resolve, reject) {
        axios.post( '/v1/login', response).then(response => {
            console.log('response: ', response)

            if (response.status == 200) {
                setTokens(response.data);
                resolve(response);
                history.push('/calendars/0');
            } else {
                reject(response);
            }
        });
    });

    return promise;
}


function logout() {
    clearTokens();
    history.push('/');
}

function requireAuth(nextState, replace) {
    if (!isLoggedIn()) {
        replace({pathname: '/login'});
    }
}

function clearTokens() {
    localStorage.removeItem(ID_TOKEN_KEY);
}


function getIdToken() {
    return getToken(ID_TOKEN_KEY);
}

// Get and store id_token in local storage
function setTokens(tokens) {
    localStorage.setItem(ID_TOKEN_KEY, JSON.stringify(tokens));

    setBearer()
}

function setBearer() {
    myCalendar = null
    loggedInUser = null
    bearer = getIdToken();

    if (bearer) {
        loggedInUser = bearer.user
        myCalendar = bearer.calendar_id
        axios.defaults.headers.common['Authorization'] = "Bearer " + bearer.token
    }
}

function getToken(kind) {
    var json = localStorage.getItem(ID_TOKEN_KEY);
    if (!json) { return null; }

    var tokens;
    try {
        tokens = JSON.parse(json);
    }
    catch(err) {
        return null;
    }

    return tokens[kind];
}

function isLoggedIn() {
    const idToken = getIdToken();
    return isTokenValid(idToken);
}

function isTokenValid(token) {
    return !!token && !isTokenExpired(token);
}

function getTokenExpirationDate(token) {
    const date = new Date(0);
    date.setUTCSeconds(token.expires_at);

    return date;
}

function isTokenExpired(token) {
    if (token.expires_at == null) {
        return false;
    }
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}


class LoggedIn extends React.Component {
    render() {
        return (
            isLoggedIn() ? this.props.children : null
        );
    }
}

class LoggedOut extends React.Component {
    render() {
        return (
            !isLoggedIn() ? this.props.children : null
        );
    }
}

function setup() {
    const testAuth = config.testAuth
    const resetAuth = false

    if (resetAuth) {
        clearTokens();
    }

    if (testAuth) {
        setTokens({djcal: {token: "test", expires_at: null, calendar_id: 1, user: {first_name: "David", role: "admin", id: 2} }})
    } else {
        setBearer()
    }
}


setup()


export {
    LoggedIn,
    LoggedOut,
    login,
    logout,
    isLoggedIn,
    requireAuth,
    loggedInUser,
    myCalendar,
}

