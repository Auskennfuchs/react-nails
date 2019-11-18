import React from 'react'
import { Box, HeaderText, Text, Column } from "react-nails"
import { createExampleBoxes } from './common'

const column = () => (
    <Box space="large">
        <HeaderText size="huge">Column</HeaderText>
        <Text>A Column creates a full size flex box element. Contained items are aligned vertically.</Text>
        <HeaderText size="large">Example</HeaderText>
        <Column>
            {createExampleBoxes()}
        </Column>
    </Box>
)


export default column