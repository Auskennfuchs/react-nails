import { createContext, Context } from 'react'
import { SpacingType, ItemSpaceProps, LineSpaceProps, AlignItemProps, JustifyItemProp } from '../properties/PropertyTypes'

export interface GridProps extends ItemSpaceProps, LineSpaceProps, AlignItemProps, JustifyItemProp {
    /**
     * number of columns
     * default 12
     */
    columns: number,
}

const GridContext: Context<GridProps> = createContext<GridProps>({ columns: 12, itemSpace: SpacingType.None, lineSpace: SpacingType.None })

export default GridContext