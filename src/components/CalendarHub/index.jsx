import React from "react";
import CalendarUI from "./Calendar";
import SideTab from "./SideTab";
import styles from "./index.module.scss";


export default function LandingPage() {
    return (
        <div className={styles.container}>
            <SideTab />
            <CalendarUI />
        </div>
    );
}
