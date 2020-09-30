import React from 'react'
import { posts } from "../../api"
import { Post } from "../"


function HomeTopPosts(props) {
    return (
        <div className="posts-top">
            <div className="posts-top__container">
                {
                    posts.slice(0, 5).map((post, index) => (
                        <Post
                            direction="column"
                            key={index}
                            title={post.title}
                            description={post.description}
                            author={post.author}
                            cover={post.cover}
                            date={post.date}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeTopPosts;