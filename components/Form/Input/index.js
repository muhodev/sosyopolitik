import styled from "styled-components"

const Input = styled.input`
    border-radius: 4px;
    outline: none;
    border: var(--border-200);
    padding: 9px 14px;
    font-size: 15px;
    color: #3b3b3b;

    &:focus {
        box-shadow: 0 0 0 3px #b7d7f9;
    }

    &:placeholder {
        color: #7a7a7a;
    }

`

export default Input