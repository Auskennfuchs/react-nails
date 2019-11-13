import { createContext } from 'react'

export interface ResponsiveContextType {
    width: number,
    height: number,
}

const ResponsiveContext: React.Context<ResponsiveContextType> = createContext({
    width: window.innerWidth,
    height: window.innerHeight,
})

export default ResponsiveContext