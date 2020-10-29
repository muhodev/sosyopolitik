import NextLink from "next/link"
import styled from "styled-components"
import {
    space,
    color,
    fontSize,
    fontWeight
} from "styled-system"

const StyledLink = styled.a`
    text-decoration: none;
    display: inline-block;
    &:hover { text-decoration: underline; }
    ${space}
    ${color}
    ${fontSize}
    ${fontWeight}
`

StyledLink.defaultProps = {
    color: "primaryColor"
}

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