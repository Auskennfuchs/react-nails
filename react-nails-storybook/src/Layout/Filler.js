import React from 'react'
import { Box, HeaderText, Text, Filler, Row } from "react-nails"

const filler = () => (
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

export default filler