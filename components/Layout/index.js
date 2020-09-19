import React, { Fragment } from 'react'
import Head from "next/head"
import { Header } from '..'
import LayoutContext from "../../store"

function Layout(props) {
    return (
        <Fragment>
            <Head>
                <title>Sosyopolitik</title>
            </Head>
            <LayoutContext.Provider value={{ isHeaderOpen: false }}>
                <div className="layout">
                    <Header />
                    <div className="layout__container">
                        {
                            props.children
                        }

                    </div>
                </div>
            </LayoutContext.Provider>
        </Fragment>
    )
}

export default Layout