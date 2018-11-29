import * as React from 'react'
import { Helmet } from 'react-helmet'
import FlexView from 'react-flexview'

import assets from './assets'

import "./App.scss"
import Footer from './Footer'


class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>OrijinOne</title>

                    {/*  Facebook OG */}
                    <meta property='og:site_name' content='Orijin.one' />
                    <meta property='og:title' content='OrijinOne' />
                    <meta property='og:description' content='Authentication Solution for Your Most Valuable Possessions' />
                    <meta property='og:url' content='http://www.orijin.one' />
                    <meta property='og:image' content={ assets.logo }/>

                    {/*
                      manifest.json provides metadata used when your web app is added to the
                      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
                     */}
                    <link rel="manifest" href="http://%www.orijin.one%/manifest.json" />
                    <link rel="shortcut icon" href="http://www.orijin.one/favicon.ico" />
                </Helmet>

                <FlexView column style={{ justifyContent: 'space-between'}} className='wrapper'>
                    <FlexView column vAlignContent='center' className='main-content'>
                        {this.props.children}
                    </FlexView>
                    <Footer />
                </FlexView>
            </React.Fragment>
        )
    }
}

export default App
