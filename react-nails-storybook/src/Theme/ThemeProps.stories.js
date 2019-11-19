import React from 'react'
import styled from 'styled-components'
import { ThemeProps, Box, Grid, Text, Filler, Column, Types, HeaderText } from 'react-nails'

const { ItemAlignType } = Types

export default {
    title: 'Theme'
}

const ColorBox = styled(Box).attrs({ flex: true })`
    min-height: 8em;
`

const ColorField = styled(ColorBox)`
    min-height: 8em;
    background-color: ${p => p.backgroundColor};
`

export const colors = () => (
    <Box space="large">
        <HeaderText size="massive">Colors</HeaderText>
        <Grid columns={12} itemSpace={["small", "medium"]} lineSpace={["small", "medium"]}>
            <Grid.Row>
                <ThemeProps>
                    {(theme) => (
                        Object.entries(theme.colors)
                            .sort((a, b) => a[0].localeCompare(b[0]))
                            .map(([col, value]) =>
                                <Grid.Column width={[6, 3, 2]} key={col}>
                                    <ColorBox backgroundColor={col} space="medium" textColor={col === "text" ? "textInvert" : "text"} rounded>
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
        </Grid>
        <HeaderText size="massive">Palette</HeaderText>
        <Grid columns={12} itemSpace={["small", "medium"]} lineSpace={["small", "medium"]}>
            <Grid.Row>
                <ThemeProps>
                    {(theme) => (
                        Object.entries(theme.palette)
                            .sort((a, b) => a[0].localeCompare(b[0]))
                            .map(([col, value]) =>
                                <Grid.Column width={[3, 2]} key={col}>
                                    <ColorField backgroundColor={value} space="medium" textColor={value === theme.colors.text ? "textInvert" : "text"} rounded>
                                        <Filler stretchChild>
                                            <Column>
                                                <Text textWeight="bold">{col}</Text>
                                                <Filler align={ItemAlignType.Bottom} stretchChild>
                                                    <Text textAlign="right" block>{value}</Text>
                                                </Filler>
                                            </Column>
                                        </Filler>
                                    </ColorField>
                                </Grid.Column>
                            )
                    )}
                </ThemeProps>
            </Grid.Row>
        </Grid>
    </Box>
)