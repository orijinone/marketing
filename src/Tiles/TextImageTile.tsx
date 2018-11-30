import * as React from 'react'

import { Col, Row } from 'reactstrap'
import Tile, { TileProps } from './Tile'

import './Tile.scss'


export interface TextImageTileProps extends TileProps {
    title: string
    image: string
    imageAlign?: 'top' | 'center' | 'bottom'
    imageOnLeft?: boolean
}


export default class TextImageTile extends React.Component<TextImageTileProps> {

    imageJustify() {
        switch (this.props.imageAlign) {
            case 'top':    return 'flex-start'
            case 'bottom': return 'flex-end'
        }

        return 'center'
    }

    render() {
        const { title, image, imageOnLeft, ...tileProps } = this.props
        const reverse = imageOnLeft === undefined ? false : imageOnLeft

        return (
            <Tile {...tileProps}>
                <Row className={`tile-row ${reverse ? 'reverse-row' : ''}`}>
                    <Col xs={12} md={6}>
                        <h1 className='tile-title'>{title}</h1>
                        <span className='tile-description'>{ this.props.children }</span>
                    </Col>
                    <Col xs={12} md={6} style={{ justifyContent: this.imageJustify() }}>
                        <img className='tile-image' src={ image }/>
                    </Col>
                </Row>
            </Tile>
        )
    }
}

