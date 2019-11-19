import React from 'react'
import { Box, HeaderText, ThemeProps } from 'react-nails'
export default {
    title: 'Theme Properties'
}

export const properties = () => (
    <Box space="large">
        <HeaderText size="huge">Types</HeaderText>
        <ThemeProps>
            {theme=>
            <pre>
                {JSON.stringify(theme,null,2,true)}
            </pre>}
        </ThemeProps>
    </Box>
)