import React, { useState, useEffect } from 'react'
import { Layout, Post } from "../components"
import { posts } from "../api"


function Home(props) {
    const [getPosts, setPosts] = useState(posts);

    return (
        <Layout>
            <div className="posts">
                <div className="posts__container">
                    {
                        getPosts.map((post, index) => (
                            <Post
                                key={index}
                                title={post.title}
                                description={post.description}
                                author={post.author}
                                cover={post.cover}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Home