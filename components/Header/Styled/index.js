import styled from 'styled-components'
import Link from "next/link"
import Container from "../../Container"

const Header = styled.header`
    width: 100%;
    height: 64px;
    background-color: var(--c-secondary);
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
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;
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