import React from 'react'
import { Box, HeaderText, Text, Row, Column, Inline, Filler } from "react-nails"

export default {
    title: 'Layout'
}

const createExampleBoxes = () => (
    <React.Fragment>
        <Box backgroundColor="positiveLight" space="medium">Item 1</Box>
        <Box backgroundColor="infoLight" space="medium">Item 2</Box>
        <Box backgroundColor="negativeLight" space="medium">Item 3</Box>
    </React.Fragment>
)

export const column = () => (
    <Box space="large">
        <HeaderText size="huge">Column</HeaderText>
        <Text>A Column creates a full size flex box element. Contained items are aligned vertically.</Text>
        <HeaderText size="large">Example</HeaderText>
        <Column>
            {createExampleBoxes()}
        </Column>
    </Box>
)

export const row = () => (
    <Box space="large">
        <HeaderText size="huge">Row</HeaderText>
        <Text>A Row creates a full size flex box element. Contained items are aligned horizontally.</Text>
        <HeaderText size="large">Example</HeaderText>
        <Row>
            {createExampleBoxes()}
        </Row>
    </Box>
)

export const inline = () => (
    <Box space="large">
        <HeaderText size="huge">Inline</HeaderText>
        <Text>An Inline creates flex box element. It's inline, so just takes the size of the containing items. Contained items are aligned horizontally.</Text>
        <HeaderText size="large">Example</HeaderText>
        <Inline>
            {createExampleBoxes()}
        </Inline>
    </Box>
)

export const filler = () => (
    <Box space="large">
        <HeaderText size="huge">Filler</HeaderText>
        <Text>A Filler element is used to fill up the remaining space inside a Row or Column element</Text>
        <HeaderText size="large">Example</HeaderText>
        <Row>
            <Box backgroundColor="positiveLight" space="medium">Item 1</Box>
            <Filler>
                <Box backgroundColor="infoLight" space="medium">Filler Item</Box>
            </Filler>
            <Box backgroundColor="negativeLight" space="medium">Item 3</Box>
        </Row>
    </Box>
)