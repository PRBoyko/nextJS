import React from 'react';
import PostsGrid from './PostsGrid';
import styles from './all-posts.module.css';

function AllPosts({posts}) {

    return (
        <section className={styles.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={posts}/>
        </section>
    );
}

export default AllPosts;