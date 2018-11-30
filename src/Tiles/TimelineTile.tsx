import * as React from 'react'
import FlexView from 'react-flexview'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Tile, { TileProps } from './Tile'
import './Tile.scss'

export interface TimelineStep {
    date: string
    image?: string
    icon?: React.ReactNode
    iconStyle?: React.CSSProperties
    description: React.ReactNode
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
                <FlexView column hAlignContent='center' style={{ width: '100%' }}>
                    <h1 className='tile-title'>{title}</h1>
                    <VerticalTimeline>
                        { steps.map((step) => (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date={ step.date }
                                icon={ step.image ? <img className='tile-image' src={ step.image }/> : step.icon }
                                iconStyle = { step.iconStyle }
                            >
                                { step.description }
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </FlexView>
            </Tile>
        )
    }
}

