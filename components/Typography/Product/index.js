import styled from "styled-components"
import { Heading } from "../"
import { space } from "styled-system"


const Title = styled(Heading.h3)`
    font-family: var(--f-family-secondary);
    font-weight: var(--f-weight-bold);
    ${space}
`

Title.defaultProps = {
    fontSize: 3,
    lineHeight: 1.25,
    m: 0,
}

export { Title }