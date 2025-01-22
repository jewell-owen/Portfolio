import React from "react";

import styles from "./About.module.css";
import cursorIcon from "../../../assets/about/cursorIcon.png";

export const About = () => {
    return (
        <section>
            <h2>About</h2>
            <div>
            <img 
                src={cursorIcon}
                alt="About Image"
                >
            </img>
            <ul>
                <li>
                    <img
                        src={cursorIcon}
                        alt="Cursor Icon">
                    </img>
                    <div>
                        <h3>Frontened Developer</h3>
                        <p>
                            I'm a frontend developer with experince in devloping fast and useful websites.
                        </p>
                    </div>
                </li>
                <li>
                    <img
                        src={cursorIcon}
                        alt="Cursor Icon">
                    </img>
                    <div>
                        <h3>Backend Developer</h3>
                        <p>
                            I'm a backend developer with experince in devloping smart databases and working with API's.
                        </p>
                    </div>
                </li>

                <li>
                    <img
                        src={cursorIcon}
                        alt="Cursor Icon">
                    </img>
                    <div>
                        <h3>UI Designer</h3>
                        <p>
                            I'm a UI designer with experince in devloping appealing and easy to use applications.
                        </p>
                    </div>
                </li>
            </ul>
            </div>
            

        </section>
    )
}