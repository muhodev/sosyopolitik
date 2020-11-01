import styled from 'styled-components'
import { space } from "styled-system"
import Link from "next/link"
import Container from "../../Container"

const Header = styled.header`
    width: 100%;
    height: 64px;
    border-bottom: var(--border-100);
`

const HeaderContainer = styled(Container)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderItem = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
    ${space}
`

const StyledLink = styled.a`
    color: currentColor;
`

const HeaderItemLink = ({ href, children }) => {
    return (
        <Link href={href} passHref>
            <StyledLink>{children}</StyledLink>
        </Link>
    )
}


export { Header, HeaderContainer, HeaderItem, HeaderItemLink }