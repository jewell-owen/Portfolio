import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Please feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img 
                        src={`${import.meta.env.BASE_URL}assets/contact/emailIcon.png`} 
                        alt="Email icon"
                    />
                    <a href="mailto:ojewell@iastate.edu">ojewell@iastate.edu</a>
                </li>
                <li className={styles.link}>
                    <img 
                        src={`${import.meta.env.BASE_URL}assets/contact/linkedinIcon.png`} 
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/owen-jewell" target="_blank" rel="noopener noreferrer">linkedin.com/owen-jewell</a>
                </li>
                <li className={styles.link}>
                    <img 
                        src={`${import.meta.env.BASE_URL}assets/contact/githubIcon.png`} 
                        alt="GitHub icon"
                    />
                    <a href="https://www.github.com/jewell-owen" target="_blank" rel="noopener noreferrer" >github.com/jewell-owen</a>
                </li>
            </ul>
        </footer>
    );
};
