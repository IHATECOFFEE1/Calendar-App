import React from "react";
import Layout from "../Layout/Layout";
import styles from "./index.module.scss";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../services/AuthContext";


export default function LandingPage() {

    const { googleSignIn } = UserAuth();

    const handleLogin = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Layout>
            <div className={styles.landingPage}>
                Landing Page
                <GoogleButton onClick={handleLogin} />
            </div>
        </Layout>
    );
}
