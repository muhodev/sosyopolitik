import styled from "styled-components"

const HamburgerMenuContentWrapper = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: var(--c-secondary);
`

function HamburgerMenuContent(props) {
    if (props.isOpen) {
        return (
            <HamburgerMenuContentWrapper>

            </HamburgerMenuContentWrapper>
        )
    } else {
        return null
    }
}

export default HamburgerMenuContent