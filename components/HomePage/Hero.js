import Image from 'next/image';
import React from 'react';
import styles from './hero.module.css';


function Hero(props) {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image src="/images/site/JavaScript-logo.png" alt='My image' width={200} height={200}/>
            </div>
            <h1>Hi I'am Pavlo</h1>
            <p>Blog about</p>
            
        </section>
    );
}

export default Hero;