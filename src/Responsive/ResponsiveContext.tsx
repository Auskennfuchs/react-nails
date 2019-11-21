import { createContext } from 'react'

export interface ResponsiveContextType {
    width: number,
    height: number,
}

export const checkWindow = () => ((typeof window !== "undefined" && window) || { innerHeight: 0, innerWidth: 0 })

const ResponsiveContext: React.Context<ResponsiveContextType> = createContext({
    width: checkWindow().innerWidth,
    height: checkWindow().innerHeight,
})

export default ResponsiveContext