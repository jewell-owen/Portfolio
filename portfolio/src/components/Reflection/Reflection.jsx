import styles from "./Reflection.module.css";

export const Reflection = () => (
  <section className={styles.container} id="reflection">
    <h2 className={styles.title}>Resume & Reflections</h2>
    <ul className={styles.list}>
            <li>
        <a
          href={`${import.meta.env.BASE_URL}assets/reflection/owen_jewell_resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume (PDF)
        </a>
      </li>
      <li>
        <a
          href={`${import.meta.env.BASE_URL}assets/reflection/reflection1.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          General Education Reflection (PDF)
        </a>
      </li>
      <li>
        <a
          href={`${import.meta.env.BASE_URL}assets/reflection/reflection2.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cumulative Reflection (PDF)
        </a>
      </li>
      <li>
        <a
          href={`${import.meta.env.BASE_URL}assets/reflection/reflection3.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
         Ethics Reflection (PDF)
        </a>
      </li>
    </ul>
  </section>
);