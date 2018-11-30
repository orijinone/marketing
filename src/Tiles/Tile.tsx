import * as React from 'react'
import Section from '../components/Section'
import FlexView from 'react-flexview'

import './Tile.scss'

export interface TileProps {
    id: string
    transitionImage?: string
    style?: React.CSSProperties
    className?: string
}


class Tile<P> extends React.Component<P & TileProps> {

    render() {
        const { id, style, transitionImage, className } = this.props
        let finalStyle = style
        if ( transitionImage ) {
            finalStyle = Object.assign({}, style, { backgroundImage: `url(${ transitionImage })`})
        }

        return (
            <Section id={id} className={`tile tile-${id} ${className}`} style={ finalStyle }>
                <FlexView className='container' style={{ height: '100%' }}>
                    {this.props.children}
                </FlexView>
            </Section>
        )
    }
}

export default Tile
