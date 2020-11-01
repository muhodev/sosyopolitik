import React, { useState, useEffect } from 'react'
import { Layout, Post, AuthBanner, BeSponsorBanner, Root, Box } from "../components"
import { HomePagePostsGrid, PostsGrid } from "../components/Post/Styled"
import { posts } from "../api"
import { Title } from '../components/Typography';

function Home(props) {
    const [getPosts, setPosts] = useState(posts);

    return (
        <Root>
            <Layout>
                <main>
                    <HomePagePostsGrid>
                        <Box>
                            <Title pb={4}>
                                Taze Çıkanlar
                            </Title>
                            <PostsGrid>

                                {
                                    getPosts.map((post, index) => (
                                        <Post
                                            key={index}
                                            title={post.title}
                                            description={post.description}
                                            author={post.author}
                                            cover={post.cover}
                                            date={post.date}
                                            slug={post.slug}
                                        />
                                    ))
                                }
                            </PostsGrid>

                        </Box>
                        <aside className="sidebar">
                            <div className="sidebar__container">
                                <AuthBanner />
                                <BeSponsorBanner />

                            </div>
                        </aside>
                    </HomePagePostsGrid>
                </main>
            </Layout>
        </Root>
    )
}

export default Home