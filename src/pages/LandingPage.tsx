import * as React from 'react'

import { Row, Col } from 'reactstrap'

import './LandingPage.scss'

class LandingPage extends React.Component {

    render() {
        return (
            <div className='landing-page' >
                <Row>
                    <Col xs={{ size: 4, offset: 4 }} className='logo' />
                </Row>
                <Row>
                    <div className='separator'/>
                </Row>
                <Row>
                    <Col xs={{ size: 10, offset: 1 }}>
                        <Row>
                            <Col xs={{ size: 12 }}  className='tag'>
                                Authentication Solution for Your Most Valuable Possessions
                            </Col>
                            <Col xs={{ size: 12 }} className='tag tag2'>
                                Ownership Tracking to Enable Secure and Trusted Transactions
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LandingPage
