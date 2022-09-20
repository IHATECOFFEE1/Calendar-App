import React from "react";
import Calendar from "./Calendar";
import SideTab from "./SideTab";
import styles from "./index.module.scss";


export default function LandingPage() {
    return (
        <div className={styles.container}>
            <SideTab />
            <Calendar />
        </div>
    );
}
