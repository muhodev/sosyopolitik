import { useState, useContext } from "react"
import { HeaderItem, HeaderItemLink, NavDesktopItems } from "../Styled"
import LayoutContext from "../../../store"
import { Flex } from "../../"
import { headerItems } from "../../../api"
import { HamburgerMenuIcon, HamburgerMenuContent } from "../HamburgerMenu"

function HeaderNavs() {
    const [isOpenHeader, setOpenHeader] = useState(false)
    const contextData = useContext(LayoutContext)

    return (
        <Flex
            alignItems="center"
        >
            <HeaderItem>
                <HamburgerMenuIcon
                    isOpen={isOpenHeader}
                    toggleHeader={() => setOpenHeader(!isOpenHeader)}
                />
            </HeaderItem>
            <HamburgerMenuContent isOpen={isOpenHeader} />
        </Flex>
    )
}

export default HeaderNavs