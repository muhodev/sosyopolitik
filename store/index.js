import { createContext } from 'react'

const LayoutContext = createContext({
    isAuthModalOpen: false,
    toggleAuthModal: () => { }
})

export default LayoutContext