import React from 'react'
import { Box, HeaderText, Grid, Types, ThemeProps } from "react-nails"
import { PropertiesBlock } from '../../common'

const { HeaderTextSizeType, SpacingType, TextAlignType } = Types

const column = () => (
    <Box space="large">
        <HeaderText size={HeaderTextSizeType.Huge}>Grid.Column</HeaderText>
        A Grid.Column element is used inside a Grid.Row element and defines a 
        <HeaderText size={HeaderTextSizeType.Large}>Example</HeaderText>
        <HeaderText size={HeaderTextSizeType.Large}>Properties</HeaderText>
        <PropertiesBlock header="columns - number">
        </PropertiesBlock>
    </Box>

)

export default column