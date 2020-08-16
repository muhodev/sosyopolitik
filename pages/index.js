import React, { useState, useEffect } from 'react'
import { Layout, Post } from "../components"
import { posts } from "../api"
import Link from "next/link"


function Home(props) {
    const [getPosts, setPosts] = useState(posts);

    return (
        <Layout>
            <section className="posts">
                <div className="posts__container">
                    <header className="posts__header">
                        <div className="posts__header--text">Taze Çıkanlar</div>
                        <div className="posts__header--action">
                            <Link href="">
                                <a className="btn">
                                    Tümünü görüntüle
                                </a>
                            </Link>
                        </div>
                    </header>
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
            </section>
        </Layout>
    )
}

export default Home