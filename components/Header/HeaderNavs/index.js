import { useState, useContext } from "react"
import { HeaderItem, HeaderItemLink } from "../Styled"
import LayoutContext from "../../../store"
import { Grid } from "../../"
import { headerItems } from "../../../api"
import { HamburgerMenuIcon, HamburgerMenuContent } from "../HamburgerMenu"

function HeaderNavs() {
    const [isOpenHeader, setOpenHeader] = useState(false)
    const contextData = useContext(LayoutContext)

    return (
        <Grid cols={`repeat(${headerItems.length + 2}, auto)`} columnGap="20px">
            {
                headerItems.map((item, index) => (
                    <HeaderItem key={index}>
                        <HeaderItemLink href={item.slug}>
                            {item.title}
                        </HeaderItemLink>
                    </HeaderItem>
                ))
            }
            <HeaderItem
                onClick={() => contextData.toggleAuthModal(true)}
            >
                Giriş yap
            </HeaderItem>
            <HeaderItem>
                <HamburgerMenuIcon
                    isOpen={isOpenHeader}
                    toggleHeader={() => setOpenHeader(!isOpenHeader)}
                />
            </HeaderItem>
            <HamburgerMenuContent isOpen={isOpenHeader} />
        </Grid>
    )
}

export default HeaderNavs