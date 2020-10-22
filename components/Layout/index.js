import React, { Fragment, useState } from 'react'
import Head from "next/head"
import { AuthModal, Header } from '..'
import LayoutContext from "../../store"

function Layout(props) {
    const [isAuthModalOpen, setAuthModalOpen] = useState(false)
    return (
        <LayoutContext.Provider value={{
            isAuthModalOpen, toggleAuthModal: (isOpen) => {
                setAuthModalOpen(isOpen)
            }
        }}>

            <Head>
                <title>Sosyopolitik</title>
            </Head>
            <div className="layout">
                <Header />
                <div className="layout__container">
                    {
                        props.children
                    }

                </div>
                <AuthModal />
            </div>
        </LayoutContext.Provider>
    )
}

export default Layout