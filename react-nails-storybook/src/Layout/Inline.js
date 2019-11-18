import React from 'react'
import { Box, HeaderText, Text, Inline } from "react-nails"
import { createExampleBoxes } from './common'

const inline = () => (
    <Box space="large">
        <HeaderText size="huge">Inline</HeaderText>
        <Text>An Inline creates flex box element. It's inline, so just takes the size of the containing items. Contained items are aligned horizontally.</Text>
        <HeaderText size="large">Example</HeaderText>
        <Inline>
            {createExampleBoxes()}
        </Inline>
    </Box>
)

export default inline