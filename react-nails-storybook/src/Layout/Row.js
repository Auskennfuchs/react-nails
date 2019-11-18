import React from 'react'
import { Box, HeaderText, Text, Row } from "react-nails"
import { createExampleBoxes } from './common'

const row = () => (
    <Box space="large">
        <HeaderText size="huge">Row</HeaderText>
        <Text>A Row creates a full size flex box element. Contained items are aligned horizontally.</Text>
        <HeaderText size="large">Example</HeaderText>
        <Row>
            {createExampleBoxes()}
        </Row>
    </Box>
)


export default row