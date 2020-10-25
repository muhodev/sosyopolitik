import styled from "styled-components"

const Grid = styled.div`
    display:grid;
    grid-template-columns: ${(props) => props.cols ? props.cols : "1fr"};
    ${(props) => props.gap ?
        `grid-gap: ${props.gap}` : null
    }
    ${(props) => props.columnGap ?
        `grid-column-gap: ${props.columnGap}` : null
    }
    ${(props) => props.rowGap ?
        `grid-row-gap: ${props.rowGap}` : null
    }
`

export default Grid;