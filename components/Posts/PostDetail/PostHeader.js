import Image from 'next/image';
import React from 'react';
import styles from './post-header.module.css';

function PostHeader({title, image}) {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={200} height={250}/>
        </header>
    );
}

export default PostHeader;