import React from 'react'
import { ThemeProps, Box, Grid } from 'react-nails'

export default {
    title: 'Theme'
}

export const colors = () => (
    <Box space="large">
        <Grid.Grid columns={12}>
            <Grid.Row>
                <ThemeProps>
                    {(theme) => (
                        Object.entries(theme.colors).map(([col, value]) =>
                            <Grid.Column width={[4,2]}>
                                <Box backgroundColor={col} space="medium">{col}</Box>
                            </Grid.Column>
                        )   
                    )}
                </ThemeProps>
            </Grid.Row>
        </Grid.Grid>
    </Box>
)