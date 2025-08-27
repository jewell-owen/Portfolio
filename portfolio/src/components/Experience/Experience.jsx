import React from "react";

import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import history from "../../data/history.json"

export const Experience = () => {
    return (
            <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience & Skills</h2>
            {} <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return (<div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img src={`${import.meta.env.BASE_URL}assets/${skill.imageSrc}`} alt={skill.title}></img>
                                    </div>
                                    <p>{skill.title}</p>
                            </div>
                        );
                        })}
                        </div>
<ul className={styles.history}>
    {
        history.map((historyItem, id) => {
            return (
                <li key={id} className={styles.historyItem}>
                    <div className={styles.historyHeader}>
                        <h3>{historyItem.role}</h3>
                        <h4>{historyItem.organisation}</h4>
                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    </div>
                    <div className={styles.historyBody}>
                        <img
                            src={`${import.meta.env.BASE_URL}assets/${historyItem.imageSrc}`}
                            alt={`${historyItem.organisation} Logo`}
                        />
                        <div className={styles.historyItemDetails}>
                            <ul>
                                {historyItem.experiences.map((expereince, idx) => (
                                    <React.Fragment key={idx}>
                                        <li>{expereince}</li>
                                        {idx !== historyItem.experiences.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>
            );
        })
    }
</ul>
            </div>
            </section>
    );
};