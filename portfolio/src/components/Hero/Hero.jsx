import React from 'react';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, I'm Owen</h1>
                <p className={styles.description}>
                    I'm a junior majoring in Computer Engineering with a minor in Applied Artificial Intelligence. 
                    Please reach out if you would like to learn more!
                </p>
                <a href="mailto:ojewell@iastate.edu" className={styles.contactBtn}>Contact Me</a>
            </div>

            {/* Corrected Image Path */}
            <img 
                src={`${import.meta.env.BASE_URL}assets/hero/heroImage.png`}  
                alt="Hero Image" 
                className={styles.heroImg}
            />

            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
