import React from 'react'
import { Box, Types, HeaderText } from 'react-nails'
export default {
    title: 'Types'
}

const TypeBlock = ({ name, typeDef }) => (
    <React.Fragment>
        <HeaderText size="large">{name}</HeaderText>
        <table>
            <thead>
                <tr>
                    <th>Entry</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(typeDef)
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .map(([entry, value]) => (
                        <tr key={entry}>
                            <td>{entry}</td>
                            <td>{value}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </React.Fragment>
)

export const types = () => (
    <Box space="large">
        <HeaderText size="huge">Types</HeaderText>
        {Object.entries(Types)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([name, typeDef]) => <TypeBlock key={name} name={name} typeDef={typeDef} />)}
    </Box>
)