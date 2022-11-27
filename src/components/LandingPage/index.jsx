import React from "react";
import Layout from "../Layout/Layout";
import styles from "./index.module.scss";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../services/AuthContext";



export default function LandingPage() {
    const { googleSignIn , user} = UserAuth();

    const handleLoginWithGoogle = async () => {
        try {
            await googleSignIn()
            
            
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
        <Layout>
            <div className={styles.landingPage}>        
                <div className={styles.aboutBlock}>
                    <div className={styles.subTitle}>
                        About<br />Everyday
                    </div>

                    <div className={styles.about}>
                        Organize your week and plan your everyday expenses<br /><br />Everyday is a calendar that lets you plan your week and keep track of where you spend your money
                    </div>
                </div>

                <div className={styles.logBlock}>

                    <div className={styles.logTitle}>
                        Everyday
                    </div>

                    <div className={styles.logText}>
                        Log in:
                    </div>

                    <div className={styles.googleSign}>
                        <GoogleButton onClick={handleLoginWithGoogle} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}