import React from 'react'
import { Box, HeaderText, Grid, Types, ThemeProps } from "react-nails"
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

const grid = () => (
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

export default grid