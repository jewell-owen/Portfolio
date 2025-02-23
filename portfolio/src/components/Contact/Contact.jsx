import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Please feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={"../../assets/contact/emailIcon.png"} alt="Email icon"></img>
                <a href="mailto:ojewell@iastate.edu">ojewell@iastate.edu</a>
            </li>
            <li className={styles.link}>
                <img src={"../../assets/contact/linkedinIcon.png"} alt="LinkedIN icon"></img>
                <a href="https://www.linkedin.com/in/owen-jewell">linkedin.com/owen-jewell</a>
            </li>
            <li className={styles.link}>
                <img src={"../../assets/contact/emailIcon.png"} alt="GitHub icon"></img>
                <a href="https://www.github.com/jewell-owen">github.com/jewell-owen</a>
            </li>
        </ul>
    </footer>
};