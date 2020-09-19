import { createContext } from 'react'

const LayoutContext = createContext({
    isHeaderOpen: false,
    toggleHeader: () => { }
})

export default LayoutContext