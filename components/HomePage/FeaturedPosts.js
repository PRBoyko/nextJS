import React from 'react';
import PostsGrid from '../Posts/PostsGrid';
import styles from './featured-posts.module.css';

function FeaturedPosts({posts}) {
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts}/>
        </section>
    );
}

export default FeaturedPosts;