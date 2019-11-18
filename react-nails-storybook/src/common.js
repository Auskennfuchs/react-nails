import React from 'react'
import { Box, HeaderText, Types } from "react-nails"
const { HeaderTextSizeType } = Types


export const PropertiesBlock = ({header, children }) => (
    <Box>
        <HeaderText size={HeaderTextSizeType.Medium}>{header}</HeaderText>
        {children}
    </Box>
)