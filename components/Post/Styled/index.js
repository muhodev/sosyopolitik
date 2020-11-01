import styled from "styled-components"
import { Title } from "../../Typography"

const PostTitle = styled(Title)`
    line-height: 28px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    max-height: 84px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export { PostTitle }
