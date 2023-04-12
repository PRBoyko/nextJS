import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import styles from './post-item.module.css';

function PostItem({ post }) {
    const { title, image, exerpt, date, slug } = post;
    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${slug}/${image}`
 
    return (
        <li className={styles.post}>
            <Link href={`/posts/${slug}`}>
                <div className={styles.image}>
                    <Image src={imagePath} alt={title} width ={300} height={200} layout='responsive'/>
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{exerpt}</p>
                </div>
            </Link>
        </li>
    );
}

export default PostItem;