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
        <HeaderText size="large">Code</HeaderText>
        <p>
            <pre>
                <code>
                    {`
<Column>
    <Box backgroundColor="positiveLight" space="medium">Item 1</Box>
    <Box backgroundColor="infoLight" space="medium">Item 2</Box>
    <Box backgroundColor="negativeLight" space="medium">Item 3</Box>
</Column>
                `}
                </code>
            </pre>
        </p>
    </Box>
)


export default column