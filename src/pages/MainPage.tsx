import * as React from 'react'

import { Row, Col } from 'reactstrap'

import './MainPage.scss'

class MainPage extends React.Component {

    render() {
        return (
            <div className='main' >
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
                                Ownership Tracking to Enable the Most Trusted Transactions
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MainPage
