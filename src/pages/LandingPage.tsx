import * as React from 'react'
import './LandingPage.scss'
import { Row, Col } from 'reactstrap'
import assets from '../assets'
import FlexView from 'react-flexview'

import Tile from '../Tiles/Tile'
import TextImageTile from '../Tiles/TextImageTile'
import TimelineTile from '../Tiles/TimelineTile'

class LandingPage extends React.Component {

    render() {
        return (
            <FlexView column style={{ justifyContent: 'space-between'}} hAlignContent='center' className='landing-page'>
                <Tile id='hero'>
                    <FlexView column vAlignContent='center'>
                        <Row>
                            <Col xs={{size: 4, offset: 4}} className='logo' />
                        </Row>
                        <Row>
                            <Col xs={4} className='separator'/>
                        </Row>
                        <Row className='pb-5'>
                            <Col xs={{size: 10, offset: 1}} className='tag'>
                                Ownership Authentication Solution for High Valued Assets
                            </Col>
                            <Col xs={{size: 10, offset: 1}} className='tag tag2'>
                                The Standard for Trusted Transactions Beyond the First Point of Sale
                            </Col>
                        </Row>
                    </FlexView>
                </Tile>

                <TextImageTile id='Description'
                               title='Ownership Authentication Solution for High Valued Assets'
                               image={ assets.stamp }
                               style={{ color: '#47525d', background: '#fff' }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies leo vitae sodales luctus. Nullam condimentum, nisl non imperdiet lacinia, ipsum augue dapibus lorem, nec dictum lectus nisl id magna. Aliquam at dapibus velit. Nullam porta ultricies turpis, vel euismod diam elementum sit amet. Praesent non semper urna, a facilisis turpis. Aenean urna nulla, tincidunt ut eros sed, rhoncus feugiat mauris. Vestibulum ultricies leo ut congue fermentum. Vestibulum vitae aliquam quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </TextImageTile>

                <TextImageTile id='How'
                               title='How It Works'
                               image={ assets.stamp }
                               imageOnLeft
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies leo vitae sodales luctus. Nullam condimentum, nisl non imperdiet lacinia, ipsum augue dapibus lorem, nec dictum lectus nisl id magna. Aliquam at dapibus velit. Nullam porta ultricies turpis, vel euismod diam elementum sit amet. Praesent non semper urna, a facilisis turpis. Aenean urna nulla, tincidunt ut eros sed, rhoncus feugiat mauris. Vestibulum ultricies leo ut congue fermentum. Vestibulum vitae aliquam quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </TextImageTile>

                <TimelineTile id='timeline'
                              title='Timeline'
                              style={{ color: '#47525d', background: '#fff' }}
                              steps={[
                                  {
                                      title: 'Start',
                                      description: 'We begin',
                                      image: assets.stamp
                                  },
                                  {
                                      title: 'End',
                                      description: 'We end',
                                      image: assets.stamp
                                  }
                              ]}/>

            </FlexView>
        )
    }
}

export default LandingPage
