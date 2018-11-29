import * as React from 'react'
import { Row, Col } from 'reactstrap'

import './Tile.scss'


interface TileProps {
    title: string
}


export class Tile<P> extends React.Component<P & TileProps> {
}


interface ImageTextTileProps extends TileProps {
    image: string
    imageWidth?: number
    imageOnLeft?: boolean
    style?: React.CSSProperties
}


export default class ImageTextTile extends Tile<ImageTextTileProps> {

    render() {
        const { title, image, imageOnLeft, style } = this.props
        const reverse = imageOnLeft === undefined ? false : imageOnLeft

        return (
            <div className='tile' style={style}>
                <Row>
                    <Col xs={12} justify='center'>
                        <h1>{title}</h1>
                    </Col>
                </Row>
                <Row reverse={reverse}>
                    <Col xs={8}>
                        <div>
                            { this.props.children }
                        </div>
                    </Col>
                    <Col xs={4}>
                        <img src={image} style={{ maxWidth: '100%' }}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

