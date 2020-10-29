import NextLink from "next/link"
import styled from "styled-components"

const StyledLink = styled.a`
    color: currentColor;
`

function Link({ href, children }) {
    return (
        <NextLink href={href} passHref>
            <StyledLink>
                {children}
            </StyledLink>
        </NextLink>
    )
}

export default Link