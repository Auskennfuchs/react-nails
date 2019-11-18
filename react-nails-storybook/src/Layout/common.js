import React from 'react'
import { Box } from "react-nails"

export const createExampleBoxes = () => (
    <React.Fragment>
        <Box backgroundColor="positiveLight" space="medium">Item 1</Box>
        <Box backgroundColor="infoLight" space="medium">Item 2</Box>
        <Box backgroundColor="negativeLight" space="medium">Item 3</Box>
    </React.Fragment>
)
