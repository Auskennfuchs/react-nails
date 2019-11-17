import { useContext } from 'react'
import { ThemeContext } from "styled-components"

const ThemeProps = ({ children }: { children: (theme: object) => any }) => {
    const themeContext = useContext(ThemeContext)
    
    return children(themeContext)
}

export default ThemeProps