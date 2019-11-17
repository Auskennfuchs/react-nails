import { createContext, Context } from 'react'
import { SpacingType, ItemSpaceProps, LineSpaceProps } from '../properties/PropertyTypes'

export type GridProps = {
    /**
     * number of columns
     * default 12
     */
    columns: number,   
} & ItemSpaceProps & LineSpaceProps

const GridContext: Context<GridProps> = createContext<GridProps>({ columns: 12, itemSpace: SpacingType.None, lineSpace: SpacingType.None })

export default GridContext