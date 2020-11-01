import styled from "styled-components"
import { Title } from "../../Typography"

export const HomePagePostsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    ${'' /* grid-gap: 120px; */}
    margin: 55px auto;
    width: 90%;
`

export const PostsGrid = styled.div`
    display: grid;
    grid-gap: 50px;
`

export const Post = styled.div`

`

export const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    grid-column-gap: 18px;
`

export const PostMeta = styled.div`
    display: flex;
    align-items: center;
    font-size:14px;
    margin-top: 4px;
    color: #444;
`

export const PostTitle = styled(Title)`
    line-height: 21px;
    ${'' /* Desktop: 28px */}
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    max-height: 84px;
    overflow: hidden;
    text-overflow: ellipsis;
`
PostTitle.defaultProps = {
    fontSize: 1
}