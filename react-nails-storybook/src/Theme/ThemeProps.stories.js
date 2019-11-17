import React from 'react'
import styled from 'styled-components'
import { ThemeProps, Box, Grid, Text, Filler, Column, Types } from 'react-nails'

const { ItemAlignType } = Types

export default {
    title: 'Theme'
}

const ColorBox = styled(Box).attrs({ flex: true })`
    min-height: 8em;
`

export const colors = () => (
    <Box space="large">
        <Text textSize="xlarge" textAlign="center" block>Colors</Text>
        <Grid.Grid columns={12} itemSpace={["small", "medium"]} lineSpace={["small", "medium"]}>
            <Grid.Row>
                <ThemeProps>
                    {(theme) => (
                        Object.entries(theme.colors).map(([col, value]) =>
                            <Grid.Column width={[4, 2]} key={col}>
                                <ColorBox backgroundColor={col} space="medium" textColor={col === "textColor" ? "textColorInvert" : "textColor"} rounded>
                                    <Filler stretchChild>
                                        <Column>
                                            <Text textWeight="bold">{col}</Text>
                                            <Filler align={ItemAlignType.Bottom} stretchChild>
                                                <Text textAlign="right" block>{value}</Text>
                                            </Filler>
                                        </Column>
                                    </Filler>
                                </ColorBox>
                            </Grid.Column>
                        )
                    )}
                </ThemeProps>
            </Grid.Row>
        </Grid.Grid>
    </Box>
)