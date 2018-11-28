import * as React from 'react'
import './LandingPage.scss'
import { Row, Col } from '../ui/RowCol'

class LandingPage extends React.Component {

    render() {
        return (
            <Row dir='vertical' vAlign='space-between' hAlign='center' spacing={40} className='landing-page' >
                <Row hAlign='center'>
                    <Col xs={4}  className='logo' />
                </Row>
                <Row>
                    <Col xs={4} className='separator'/>
                </Row>
                <Row xs={10}>
                    <Col xs={12} className='tag'>
                        Authentication Solution for Your Most Valuable Possessions
                    </Col>
                    <Col xs={12} className='tag tag2'>
                        Ownership Tracking to Enable Secure and Trusted Transactions
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default LandingPage
