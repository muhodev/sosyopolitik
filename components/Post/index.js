import React from 'react'
import { Link } from "../"
import { Text } from "../Typography"

import { PostTitle, PostContainer, PostMeta } from "./Styled"

function Post(props) {
    return (
        <article className="post">
            <PostContainer>
                <header className="post__header">
                    <div className="post__cover">
                        <img src={props.cover} alt="" />
                    </div>
                </header>
                <main className="post__main">
                    <PostTitle>
                        <Link href={`/posts/${props.slug}`}>
                            {props.title}
                        </Link>
                    </PostTitle>

                    <PostMeta>
                        <Text mr={1}>
                            sosyopolitik
                        </Text>
                        <div>
                            ·
                                </div>
                        <div className="post__date">
                            {props.date}
                        </div>
                    </PostMeta>
                </main>
            </PostContainer>
        </article>
    )
}

export default Post