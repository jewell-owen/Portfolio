import React from "react";

import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import history from "../../data/history.json"

export const Experience = () => {
    return (
            <section className={styles.container} id="experience">
            <h2 className={styles.title}>Classwork and Clubs</h2>
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
                            return (<li key={id} className={styles.historyItem}>
                                <img src={`${import.meta.env.BASE_URL}assets/${historyItem.imageSrc}`}
                                alt={`${historyItem.organisation} Logo`}>
                                </img>
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}`}</h3>
                                    {/* , ${historyItem.organisation} */}
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experiences.map((expereince, id) => {
                                        return <li key={id}>{expereince}</li>;
                                    })}
                                        </ul>
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