import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                {/* Corrected Image Path */}
                <img 
                    src={`${import.meta.env.BASE_URL}assets/about/iowaStateLogo.png`}
                    alt="Iowa State Logo"
                    className={styles.aboutImage}
                />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={`${import.meta.env.BASE_URL}assets/about/cursorIcon.png`}
                            alt="Cursor Icon"
                        />
                        <div className={styles.aboutItemsText}>
                            <h3>Iowa State University</h3>
                            <p>
                                Expected Graduation May 2026<br />
                                GPA: 3.8
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={`${import.meta.env.BASE_URL}assets/about/serverIcon.png`}
                            alt="Server Icon"
                        />
                        <div className={styles.aboutItemsText}>
                            <h3>Computer Engineering Major</h3>
                            <p>
                                Object Oriented Programming, Introduction to Data Structures, Software Development Practices, 
                                Construction of User Interfaces, Embedded Systems I & II, Operating Systems Principles and Practice, 
                                Computer Networking, Network Protocols and Security, and Linux Operating Systems Essentials
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={`${import.meta.env.BASE_URL}assets/about/uiIcon.png`}
                            alt="UI Icon"
                        />
                        <div className={styles.aboutItemsText}>
                            <h3>Applied AI Minor</h3>
                            <p>
                                After completing my minor, I will have experience with AI programming, machine learning, and AI ethics.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
