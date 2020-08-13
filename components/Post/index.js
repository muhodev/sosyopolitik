import React from 'react'

function Post(props) {
    return (
        <article className="post">
            <div className="post__container">

                <header className="post__header">
                    <h3 className="post__title">

                    </h3>
                    <div className="post__meta">
                        <div className="post__author"></div>
                        <div className="post__date"></div>
                    </div>
                </header>

                <div className="post__description">

                </div>

                <div className="post__cover">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                </div>

            </div>
        </article>
    )
}

export default Post