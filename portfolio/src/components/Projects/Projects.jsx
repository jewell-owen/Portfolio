import React from "react";

import styles from "./Projects.module.css"

import projects from "../../data/projects.json"
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {

    //     {
    //   "title": "First Responder Drone",
    //   "imageSrc": "projects/droneSrc.jpg",
    //   "description": "This is my senior deisgn project. The drone is designed to deliver a medical payload or collect on the scene information for First Responders. I worked on the embedded C for the flight control logic of the drone. I also worked on the C logic for the sensor package.",
    //   "skills": ["Embedded C", "Java", "Python"],
    //   "demo": "",
    //   "source": ""
    // }
    
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}> {
                projects.map((project, id) => {
                    return <ProjectCard key={id} project={project}/>;
                   
                })}
            </div>
    </section>
    );
};