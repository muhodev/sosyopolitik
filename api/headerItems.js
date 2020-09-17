import React from 'react'
import { Logo } from "../components"
import HamburgerMenu from "../components/HamburgerMenu"


export default [
    [
        {
            title: <Logo />,
            slug: ""
        }
    ],
    [
        {
            title: "Sanat",
            slug: "kategori/sanat",
        },
        {
            title: "Bilim",
            slug: "kategori/bilim",
        },
        {
            title: "Düşünce",
            slug: "kategori/düsünce",
        },
        {
            title: "Tarih",
            slug: "kategori/tarih",
        },
        {
            title: <HamburgerMenu />
        }
    ]
]