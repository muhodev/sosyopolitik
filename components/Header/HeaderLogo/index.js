import { HeaderItems, HeaderItem, HeaderItemLink } from "../Styled"
import Logo from "../../Logo"

function HeaderLogo(props) {
    return (
        <HeaderItem>
            <HeaderItemLink href="/">
                <Logo />
            </HeaderItemLink>
        </HeaderItem>
    )
}

export default HeaderLogo