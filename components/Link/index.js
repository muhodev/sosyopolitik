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

    &:hover { 
        text-decoration: ${(props) => props.wrapper ? "none" : "underline"}
    }}

    ${space}
    ${color}
    ${fontSize}
    ${fontWeight}
`

function Link({ href = "/", children, wrapper }) {
    return (
        <NextLink href={href} passHref>
            <StyledLink wrapper={wrapper}>
                {children}
            </StyledLink>
        </NextLink>
    )
}

export default Link