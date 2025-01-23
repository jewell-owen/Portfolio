import React from "react";

import styles from "./About.module.css";
import iowaStateLogo from "../../../assets/about/iowaStateLogo.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
            <img 
                src={iowaStateLogo}
                alt="About Image"
                className={styles.aboutImage}
                >
            </img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={cursorIcon}
                        alt="Cursor Icon">
                    </img>
                    <div className={styles.aboutItemsText}>
                        <h3>Iowa State University</h3>
                        <p>
                            Expected Graduation 2026<br></br>
                            GPA: 3.8
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={serverIcon}
                        alt="Server Icon">
                    </img>
                    <div className={styles.aboutItemsText}>
                        <h3>Computer Engineering Major</h3>
                        <p>
                            I have experince working with both hardware and software throughout my classwork
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={uiIcon}
                        alt="UI Icon">
                    </img>
                    <div className={styles.aboutItemsText}>
                        <h3>Applied AI Minor</h3>
                        <p>
                            After completing my minor, I will have experince with AI programming, AI ethics, and machine learning
                        </p>
                    </div>
                </li>
            </ul>
            </div>
            

        </section>
    );
};