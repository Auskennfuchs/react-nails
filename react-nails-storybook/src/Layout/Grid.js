import React from 'react'
import { Box, HeaderText, Grid, Text, Row, Column, Inline, Filler } from "react-nails"

const grid = () => (
    <Box space="large">
        <HeaderText size="huge">Grid</HeaderText>
        A Grid is used to layout multiple elements in rows and columns.
        <HeaderText size="large">Example</HeaderText>
        <Grid>
            <Grid.Row>
                <Grid.Column width="4">
                    <Box backgroundColor="positiveLight" space="medium">Col1 width 4</Box>
                </Grid.Column>
                <Grid.Column width="3">
                    <Box backgroundColor="infoLight" space="medium">Col2 width 3</Box>
                </Grid.Column>
                <Grid.Column width="5">
                    <Box backgroundColor="negativeLight" space="medium">Col3 width 5</Box>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Box>
)

export default grid