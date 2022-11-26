import React from "react";
import Layout from "../Layout/Layout";
import styles from "./index.module.scss";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../services/AuthContext";

export default function Help() {

    return (
        <Layout>
            <div className={styles.landingPage}>        
                <div className={styles.aboutBlock}>
                    <div className={styles.subTitle}>
                        Help
                    </div>
                    <div className={styles.point}>
                        Create Event:
                        <div className={styles.fact}>
                        Simply add the parameters to the add event section and select "Add event"
                    </div>
                    </div>
                    <div className={styles.point}>
                        Setting Budget:
                        <div className={styles.fact}>
                        You have your own budget tracker. To change it simply select it and input a new budget
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}