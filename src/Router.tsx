import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import App from './App';
import LandingPage from './pages/LandingPage'

export default function Router(props) {
    return (
        <BrowserRouter {...props}>
            <App>
                <Route path='/' exact component={LandingPage}/>
                <Redirect from='*' to='/'/>
            </App>
        </BrowserRouter>
    )
}

