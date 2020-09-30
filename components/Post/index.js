import React from 'react'
import Link from "next/link"

function Post(props) {
    return (
        <article className="post">
            <Link href={`/${props.slug || ""}`}>
                <a className="post__link">
                    <div className={`post__container ${props.direction && "post--column"}`}>
                        <header className="post__header">
                            <div className="post__cover">
                                <img src={props.cover} alt="" />
                            </div>
                        </header>
                        <main className="post__main">
                            <h3 className="post__title">
                                {props.title}
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

                    </div>
                </a>
            </Link>
        </article>
    )
}

export default Post