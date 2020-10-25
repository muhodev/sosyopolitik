import styled from "styled-components"

const StyledLogo = styled.div`
    font-family: var(--f-family-secondary);
    font-weight: 800;
    font-size: 23px;
    z-index: 9;
`
const Logo = (props) => {
    return <StyledLogo>Sosyopolitik</StyledLogo>
}

export default Logo