import React from 'react'
import { Box, HeaderText, Grid, Types, ThemeProps, Column, Filler } from "react-nails"
import { times } from 'lodash'
import { PropertiesBlock } from '../../common'

const { HeaderTextSizeType, SpacingType, TextAlignType } = Types

const GridItemSpaceExample = ({ name, space }) => (
    <Box>
        <ThemeProps>
            {(theme) =>
                <HeaderText size={HeaderTextSizeType.Small}>{name} - {theme.spaces[space]}</HeaderText>
            }
        </ThemeProps>
        <Grid columns={3} itemSpace={space}>
            <Grid.Row>
                <Grid.Column>
                    <Box backgroundColor="positiveLight" space={SpacingType.Medium}>Column</Box>
                </Grid.Column>
                <Grid.Column>
                    <Box backgroundColor="infoLight" space={SpacingType.Medium} textAlign="center">Column</Box>
                </Grid.Column>
                <Grid.Column>
                    <Box backgroundColor="negativeLight" space={SpacingType.Medium} textAlign="right">Column</Box>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Box >
)

const GridLineSpaceExample = ({ name, space }) => (
    <Box>
        <ThemeProps>
            {(theme) =>
                <HeaderText size={HeaderTextSizeType.Small}>{name} - {theme.spaces[space]}</HeaderText>
            }
        </ThemeProps>
        <Grid columns={2} lineSpace={space}>
            <Grid.Row>
                <Grid.Column>
                    <Box backgroundColor="positiveLight" space={SpacingType.Medium} textAlign="center">Column</Box>
                </Grid.Column>
                <Grid.Column>
                    <Box backgroundColor="infoLight" space={SpacingType.Medium} textAlign="center">Column</Box>
                </Grid.Column>
                <Grid.Column>
                    <Box backgroundColor="negativeLight" space={SpacingType.Medium} textAlign="center">Column</Box>
                </Grid.Column>
                <Grid.Column>
                    <Box backgroundColor="positiveLight" space={SpacingType.Medium} textAlign="center">Column</Box>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Box >
)

export const grid = () => (
    <Box space="large">
        <HeaderText size={HeaderTextSizeType.Huge}>Grid</HeaderText>
        A Grid is used to layout multiple elements in rows and columns. A Grid contains at least one Grid.Row element to define a row. With you can control the order of elements in different responsive settings.
        <HeaderText size={HeaderTextSizeType.Large}>Example</HeaderText>
        <Grid itemSpace="medium" lineSpace="medium">
            <Grid.Row>
                <Grid.Column width="4">
                    <Box backgroundColor="positiveLight" space={SpacingType.Medium}>Col1 width 4</Box>
                </Grid.Column>
                <Grid.Column width="3">
                    <Box backgroundColor="infoLight" space={SpacingType.Medium} stretch>Col2 width 3</Box>
                </Grid.Column>
                <Grid.Column width="5">
                    <Box backgroundColor="negativeLight" space={SpacingType.Medium} stretch>Col3 width 5</Box>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="4">
                    <Box backgroundColor="positiveLight" space={SpacingType.Medium}>Col1 width 4</Box>
                </Grid.Column>
                <Grid.Column width="3">
                    <Box backgroundColor="infoLight" space={SpacingType.Medium} stretch>Col2 width 3</Box>
                </Grid.Column>
                <Grid.Column width="5">
                    <Box backgroundColor="negativeLight" space={SpacingType.Medium} stretch>Col3 width 5</Box>
                </Grid.Column>
            </Grid.Row>
        </Grid>

        <HeaderText size={HeaderTextSizeType.Large}>Properties</HeaderText>
        <PropertiesBlock header="columns - number">
            Defines the number of columns. If not provided the default of 12 columns will be used.
            <Grid>
                <Grid.Row>
                    {times(12, (idx) => (
                        <Grid.Column key={idx}>
                            <Box key={idx} border="thin" borderColor="black" textAlign={TextAlignType.Center}>
                                {idx}
                            </Box>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </PropertiesBlock>

        <PropertiesBlock header="itemSpace - SpacingType">
            This property defines the horizontal space between 2 grid columns (horizonal gutter). The value can be set as single value or as responsive array
            {Object.entries(SpacingType).map(([name, space]) => (
                <GridItemSpaceExample key={name} name={name} space={space} />
            ))}
        </PropertiesBlock>

        <PropertiesBlock header="lineSpace - SpacingType">
            This property defines the vertical space between 2 grid rows (vertical gutter). The value can be set as single value or as responsive array
            {Object.entries(SpacingType).map(([name, space]) => (
                <GridLineSpaceExample key={name} name={name} space={space} />
            ))}
        </PropertiesBlock>
    </Box>
)

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

export const row = () => (
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

export default {
    title: 'Layout/Grid'
}
