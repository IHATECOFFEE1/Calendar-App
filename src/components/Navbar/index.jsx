import React from "react";
import styles from "./index.module.scss";


export default function Navbar() {

    return (
        <div className={styles.navbar}>

        <div className={styles.help}>

        Help

        </div>
 
        <div className={styles.about}>

            About

        </div>

        </div>
    );
}