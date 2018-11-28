import * as React from 'react'
import * as History from 'history'
import { Grid, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import CssBaseline from '@material-ui/core/CssBaseline'
import { resolve, history } from './router'

import LandingPage from './pages/LandingPage'
import assets from './assets'

import "./App.scss"
import Footer from './Footer'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#003648',
            contrastText: '#dfac6e',
        },
        secondary: {
            main: '#ffffff',
            contrastText: '#000000',
        },
        error: {
            main: '#ef5350',
            contrastText: '#000000',
        }
    },
});


interface AppState {
    component?: React.Component
}



class App extends React.Component {

    state   : AppState
    account : Account

    constructor(props: any, context: any) {
        super(props, context)

        this.accountChanged = this.accountChanged.bind(this)
        this.renderLocation = this.renderLocation.bind(this)

        this.state = {
        }
    }

    async accountChanged() {
        // Setup account state object w/ particular callbacks

        this.setState({ account: { model: Object.assign({}, this.account), svc: this.account } })
    }

    componentDidMount() {
        history.listen(this.renderLocation)   // render subsequent URLs
        this.renderLocation(history.location, 'REPLACE')
    }

    renderComponent(component : any) {
        if (!component) {
            console.log("Error trying to set to null component")
            return
        }

        console.log(`Setting component to ${component.type.name}`)
        this.setState({ component })
    }

    async renderLocation(location : History.Location, action: History.Action) {
        const routes : object[] = this.commonRoutes

        if (false) {
            routes.concat( this.loggedInRoutes )
        } else {
            routes.concat( this.loggedOutRoutes )
        }

        try {
            const component = await resolve( routes, location)
            this.renderComponent(component)
        } catch (error) {
            const component = await resolve( routes, { ...location, error })
            this.renderComponent(component)
        }
    }


    loggedOutRoutes = [
    ];

    loggedInRoutes = [
    ];

    commonRoutes = [
        { path: '/', action: () => <LandingPage /> },
    ];

    render() {
        return (
            <MuiThemeProvider theme={theme}>
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

                <Grid className='orijin'>
                    <CssBaseline />
                    { this.state.component }
                </Grid>
                <Footer />
            </MuiThemeProvider>
        )
    }
}

export default App
