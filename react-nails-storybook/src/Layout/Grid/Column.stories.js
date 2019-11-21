import React from 'react'
import { Box, HeaderText, Grid, Types } from "react-nails"
import { PropertiesBlock } from '../../common'

const { HeaderTextSizeType, SpacingType } = Types

export const column = () => (
    <Box space="large">
        <HeaderText size={HeaderTextSizeType.Huge}>Grid.Column</HeaderText>
        A Grid.Column element is used inside a Grid.Row element. It creates a flexbox container.
        <HeaderText size={HeaderTextSizeType.Large}>Example</HeaderText>
        <HeaderText size={HeaderTextSizeType.Large}>Properties</HeaderText>
        <PropertiesBlock header="width - number, [number]">
            Sets the used columns of grid. The value can be set as single value or as responsive array
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Box space={SpacingType.Medium} backgroundColor="positiveLight">Column Width 4</Box>
                    </Grid.Column>
                    <Grid.Column>
                        <Box space={SpacingType.Medium} backgroundColor="infoLight">Column default width 1</Box>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Box space={SpacingType.Medium} backgroundColor="negativeLight">Column Width 7</Box>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </PropertiesBlock>
    </Box>

)

export default {
    title: 'Layout/Grid-Column'
}