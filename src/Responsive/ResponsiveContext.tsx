import { createContext } from 'react'

export interface ResponsiveContextType {
    width: number,
    height: number,
}

const ResponsiveContext: React.Context<ResponsiveContextType> = createContext({
    width: (typeof window !== "undefined" && window.innerWidth) || 0,
    height: (typeof window !== "undefined" && window.innerHeight) || 0,
})

export default ResponsiveContext