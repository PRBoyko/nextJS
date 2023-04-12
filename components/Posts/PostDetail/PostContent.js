import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';
import styles from './post-content.module.css';

function PostContent({ detailInfo }) {
    const { title, image, slug, content } = detailInfo;
    return (
        <article className={styles.content}>
            <PostHeader title={title} image={`/images/posts/${slug}/${image}`} />
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
}

export default PostContent;