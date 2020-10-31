import React from 'react'
import { Link, Grid } from "../"

function Post(props) {
    return (
        <article className="post">
            <Grid cols="1fr 2fr" columnGap="27px">
                <header className="post__header">
                    <div className="post__cover">
                        <img src={props.cover} alt="" />
                    </div>
                </header>
                <main className="post__main">

                    <h3 className="post__title">
                        <Link href={`/posts/${props.slug}`}>
                            {props.title}
                        </Link>
                    </h3>
                    <div className="post__meta">
                        <div className="post__author">
                            sosyopolitik
                                </div>
                        <div>
                            ·
                                </div>
                        <div className="post__date">
                            {props.date}
                        </div>
                    </div>
                </main>
            </Grid>
        </article>
    )
}

export default Post