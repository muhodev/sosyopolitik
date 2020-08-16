import React from 'react'
import Link from "next/link"
import { Banner } from '../'

function BeSponsorBanner(props) {
    return (
        <Banner>
            <div className="banner__title">
                Sponsorluk
            </div>
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