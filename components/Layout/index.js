import React, { Fragment } from 'react'
import Head from "next/head"
import { Header, AuthBanner, BeSponsorBanner } from '..'

function Layout(props) {
    return (
        <Fragment>
            <Head>
                <title>Sosyopolitik</title>
            </Head>
            <div className="layout">
                <div className="layout__container">
                    <Header />
                    <main>
                        {
                            props.children
                        }
                    </main>
                    <aside className="sidebar">
                        <div className="sidebar__container">
                            <AuthBanner />
                            <BeSponsorBanner />
                        </div>
                    </aside>
                </div>
            </div>
        </Fragment>
    )
}

export default Layout