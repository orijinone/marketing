import * as React from 'react'
import './LandingPage.scss'
import { Row, Col } from 'reactstrap'
import ImageTextTile from '../ui/ImageTextTile'
import assets from '../assets'
import FlexView from 'react-flexview'

class LandingPage extends React.Component {

    render() {
        return (
            <FlexView column style={{ justifyContent: 'space-between'}} hAlignContent='center' className='landing-page' >
                <Row>
                    <Col xs={{size: 4, offset: 4}} className='logo' />
                </Row>
                <Row>
                    <Col xs={4} className='separator'/>
                </Row>
                <Row>
                    <Col xs={{size: 10, offset: 1}} className='tag'>
                        Authentication Solution for Your Most Valuable Possessions
                    </Col>
                    <Col xs={{size: 10, offset: 1}} className='tag tag2'>
                        Ownership Tracking to Enable Secure and Trusted Transactions
                    </Col>
                </Row>
                <ImageTextTile title='Cool' image={ assets.people } style={{ backgroundColor: '#fff' }}>
                    <Row>
                        <Col xs={6}>
                            <ul>
                                <li>One</li>
                                <li>Two</li>
                            </ul>
                        </Col>
                    </Row>
                </ImageTextTile>
            </FlexView>
        )
    }
}

export default LandingPage
