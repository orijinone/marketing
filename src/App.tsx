import * as React from 'react'
import * as History from 'history'

import CssBaseline from '@material-ui/core/CssBaseline'
import { resolve, history } from './router'

import MainPage from './pages/MainPage'

import "./App.scss"


class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                m@orijin.one
            </div>
        )
    }
}


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
        { path: '/', action: () => <MainPage /> },
    ];

    render() {
        return (
            <div id='app'>
                <div className='orijin'>
                    <CssBaseline />
                    { this.state.component }
                </div>
                <Footer />
            </div>
        )
    }
}

export default App
