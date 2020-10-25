import { Header, HeaderContainer } from "./Styled"
import HeaderLogo from "./HeaderLogo"
import HeaderNavs from "./HeaderNavs"

function HeaderWidget() {
    return (
        <Header>
            <HeaderContainer>
                <HeaderLogo />
                <HeaderNavs />
            </HeaderContainer>
        </Header>
    )
}

export default HeaderWidget