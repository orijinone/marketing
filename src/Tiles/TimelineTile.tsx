import * as React from 'react'
import FlexView from 'react-flexview'
import provideScrollPosition from 'react-provide-scroll-position';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Tile, { TileProps } from './Tile'
import './Tile.scss'


interface ProvideScrollProps {
    scrollTop: number
}

export interface TimelineStep {
    date: string
    image?: string
    icon?: React.ReactNode
    iconStyle?: React.CSSProperties
    description: React.ReactNode
}

export interface TimelineTileProps extends TileProps, ProvideScrollProps {
    title: string
    steps: TimelineStep[]
}


class TimelineTile extends React.Component<TimelineTileProps> {

    topNode:    React.RefObject<HTMLDivElement>
    scrollLine: React.RefObject<HTMLDivElement>

    constructor(props, context) {
        super(props, context)

        this.topNode = React.createRef()
        this.scrollLine = React.createRef()

        this.moveLine = this.moveLine.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.moveLine )
    }

    componentWillUnmount() {
        window.removeEventListener( 'scroll', this.moveLine )
    }

    moveLine() {
        window.requestAnimationFrame(() => {
            const line = this.scrollLine.current
            const topNode = this.topNode.current
            if (!line || !topNode) { return }

            const timeline = topNode.parentElement!
            const timelineTop = topNode.getBoundingClientRect().top + window.scrollY

            const top = Math.min(timeline.clientHeight - line.clientHeight / 2, window.scrollY - timelineTop + window.innerHeight / 2)
            line.style.top = `${top}px`
        });
    }


    render() {
        const { title, steps, ...tileProps } = this.props

        return (
            <Tile className='tile-timeline' {...tileProps}>
                <FlexView column hAlignContent='center' style={{ width: '100%' }}>
                    <h1 className='tile-title'>{title}</h1>
                    <VerticalTimeline>
                        <div ref={ this.topNode } />
                        <div className='tile-scrollingLine' ref={ this.scrollLine } />
                        { steps.map((step) => (
                            <VerticalTimelineElement
                                key={step.date}
                                className="vertical-timeline-element--work"
                                date={ step.date }
                                icon={ step.image ? <img className='tile-image' src={ step.image }/> : step.icon }
                                iconStyle={ step.iconStyle }
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

export default provideScrollPosition(TimelineTile)
