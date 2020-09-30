import React, { useState, useEffect } from 'react'
import { Layout, Post, AuthBanner, BeSponsorBanner } from "../components"
import { posts } from "../api"


function Home(props) {
    const [getPosts, setPosts] = useState(posts);

    return (
        <Layout>
            <main>
                <section className="posts">
                    <div className="posts__container">
                        <header className="posts__header">
                            <div className="posts__header--text">Taze Çıkanlar</div>
                        </header>
                        <div className="posts__grid">
                            {
                                getPosts.map((post, index) => (
                                    <Post
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
                    <aside className="sidebar">
                        <div className="sidebar__container">
                            <AuthBanner />
                            <BeSponsorBanner />

                        </div>
                    </aside>
                </section>
            </main>
        </Layout>
    )
}

export default Home