import React from "react";
import styles from "./index.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footText}>
              Everyday is a class project of students from the University of Central Florida.
            </div>

            <div className={styles.footText}>
              This project was made in fall 2022
            </div>

            <div className={styles.title}>
              Everyday
            </div>
        </footer>
    );
}
