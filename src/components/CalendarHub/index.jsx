import React from "react";
import CalendarUI from "./Calendar";
import styles from "./index.module.scss";


export default function LandingPage() {
    return (
        <div className={styles.container}>
            <CalendarUI />
        </div>
    );
}
