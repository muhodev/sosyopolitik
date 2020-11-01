import React from 'react'
import Link from "next/link"
import { Banner } from '../'
import { Title } from "../Typography"

function BeSponsorBanner(props) {
    return (
        <Banner>
            <Title>
                Sponsorluk
            </Title>
            <div className="banner__description">
                Sosyopolitik'e destek olmak istiyorsanız sponsor olabilirsiniz.
            </div>
            <footer className="banner__footer">
                <div className="btn-group">
                    <Link href="/">
                        <a className="btn btn--default">Sponsor ol</a>
                    </Link>
                </div>
            </footer>
        </Banner>
    )
}

export default BeSponsorBanner