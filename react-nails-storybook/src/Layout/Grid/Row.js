import React from 'react'
import { Box, HeaderText, Grid, Types, Column, Filler } from "react-nails"
import { PropertiesBlock } from '../../common'

const { HeaderTextSizeType, SpacingType, TextAlignType } = Types

const ExampleGrid = () => (
    <React.Fragment>
        <Grid.Column>
            <Column>
                <Box backgroundColor="positiveLight" space={SpacingType.Medium}>Col1</Box>
                <Filler>
                    <Box backgroundColor="positive" space={SpacingType.Medium} stretch>Col<br />Second row of text</Box>
                </Filler>
            </Column>
        </Grid.Column>
        <Grid.Column>
            <Box backgroundColor="infoLight" space={SpacingType.Medium} stretch>Col2<br />Second row of text<br />Second row of text<br />Second row of text</Box>
        </Grid.Column>
        <Grid.Column>
            <Box backgroundColor="negativeLight" space={SpacingType.Medium} stretch>Col3 next row</Box>
        </Grid.Column>
        <Grid.Column>
            <Box backgroundColor="negative" space={SpacingType.Medium} stretch>Col4 next row</Box>
        </Grid.Column>
    </React.Fragment>
)

const column = () => (
    <Box space="large">
        <HeaderText size={HeaderTextSizeType.Huge}>Grid.Row</HeaderText>
        A Grid.Row element is a container for Grid.Column elements. A Grid.Row can contain more items than defined columns. In this case, the overlapping columns will get wrapped to next row.
        <HeaderText size={HeaderTextSizeType.Large}>Example</HeaderText>
        <HeaderText size={HeaderTextSizeType.Large}>Properties</HeaderText>
        <PropertiesBlock header="equalHeights - boolean">
            Sets all columns to the same size, even if they are wrapped to the next row. Without this options all columns in one visible row have the size of the heighest column.
            <HeaderText size={HeaderTextSizeType.Small}>equalHeights: false</HeaderText>
            <Grid columns={2}>
                <Grid.Row>
                    <ExampleGrid />
                </Grid.Row>
            </Grid>
            <HeaderText size={HeaderTextSizeType.Small}>equalHeights: true</HeaderText>
            <Grid columns={2}>
                <Grid.Row equalHeights>
                    <ExampleGrid />
                </Grid.Row>
            </Grid>
        </PropertiesBlock>
    </Box>

)

export default column