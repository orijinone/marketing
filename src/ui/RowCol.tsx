import * as React from 'react'
import { Grid as MGrid } from '@material-ui/core'
export const Grid = MGrid // Re-export Grid

import { GridItemsAlignment, GridProps, GridDirection, GridJustification } from '@material-ui/core/Grid'

export type DirectionProperty = 'vertical' | 'horizontal'
export type HorzAlignment = 'left' | 'center' | 'right' | 'stretch' | 'baseline'
export type VertAlignment = 'top' | 'center' | 'bottom' | 'space-between' | 'space-around' | 'space-evenly'


export interface RowProps extends GridProps {
    dir?:    DirectionProperty
    hAlign?: HorzAlignment
    vAlign?: VertAlignment
}

function convertDir(d: DirectionProperty): GridDirection {
    switch (d) {
        case 'vertical':   return 'column'
        case 'horizontal': return 'row'
    }
}

function convertA(a: HorzAlignment | VertAlignment): GridItemsAlignment | GridJustification {
    switch (a) {
        case 'top':    return 'flex-start'
        case 'bottom': return 'flex-end'
        case 'left':  return 'flex-start'
        case 'right': return 'flex-end'
    }
    return a
}

function convert(prop: 'align' | 'justify', a: HorzAlignment | VertAlignment): GridItemsAlignment | GridJustification {
    switch (prop) {
        case 'align':
            return convertA(a)
        case 'justify':
            return convertA(a)
    }
}

export function Row(props: RowProps) {
    const { children, dir, vAlign, hAlign, spacing, ...other } = props
    const direction = dir ? dir : 'horizontal'
    let justify
    let align

    switch (direction) {
        case 'horizontal':
            justify = hAlign
            align = vAlign
            break
        case 'vertical':
            justify = vAlign
            align = hAlign
            break
    }

    return (
        <MGrid container
              direction={ convertDir(direction) }
              alignItems={align ? convert('align', align) as GridItemsAlignment : 'center'}
              justify={justify ? convert('justify', justify) as GridJustification : 'center'}
              spacing={spacing ? spacing : 0}
              {...other} >
            { children }
        </MGrid>
    )
}


export function Col(props: GridProps) {
    const { children, ...other } = props

    return (
        <MGrid item
              {...other} >
            { children }
        </MGrid>
    )
}
