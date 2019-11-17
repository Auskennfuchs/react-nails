import { createContext, Context } from 'react'
import { SpacingType } from '../properties/PropertyTypes'

export type GridProps = {
    columns: number,
    itemSpace: SpacingType,
    lineSpace: SpacingType,
}

const GridContext: Context<GridProps> = createContext<GridProps>({ columns: 12, itemSpace: SpacingType.None, lineSpace: SpacingType.None })

export default GridContext