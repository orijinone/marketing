import * as React from 'react'
import FlexView from 'react-flexview'
import { Col, Row } from 'reactstrap'

import Tile, { TileProps } from './Tile'

import './Tile.scss'

export interface TimelineStep {
    title: string
    image: string
    description: string
}

export interface TimelineTileProps extends TileProps {
    title: string
    steps: TimelineStep[]
}


export default class TimelineTile extends React.Component<TimelineTileProps> {

    render() {
        const { title, steps, ...tileProps } = this.props

        return (
            <Tile className='tile-timeline' {...tileProps}>
                <FlexView column hAlignContent='center'>
                    <h1 className='tile-title'>{title}</h1>
                    { steps.map((step, i) => (
                        <Row style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
                            <Col xs={5}>
                                <span className='tile-description'>{ step.description }</span>
                                <img className='tile-image' src={ step.image }/>
                            </Col>
                            <Col xs={2} style={{ alignItems: 'center' }}>
                                <div className='tile-vline' />
                            </Col>
                            <Col xs={5}>&nbsp;</Col>
                        </Row>
                    ))}
                </FlexView>
            </Tile>
        )
    }
}

