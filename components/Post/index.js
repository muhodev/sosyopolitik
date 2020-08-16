import React from 'react'
import Link from "next/link"

function Post(props) {
    return (
        <article className="post">
            <Link href={`/${props.slug || ""}`}>
                <a className="post__link">
                    <div className="post__container">
                        <header className="post__header">
                            <h2 className="post__title">
                                {props.title}
                            </h2>
                            <p className="post__description">
                                {props.description}
                            </p>
                            <div className="post__meta">
                                {/* <div className="post__author">
                                    {props.author.name}
                                </div> */}
                                <div className="post__date">
                                    {props.date}
                                </div>
                            </div>
                        </header>
                        <footer>
                            <div className="post__cover">
                                <img src={props.cover} alt="" />
                            </div>
                        </footer>

                    </div>
                </a>
            </Link>
        </article>
    )
}

export default Post