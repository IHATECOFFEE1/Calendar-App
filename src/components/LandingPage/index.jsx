import React from "react";
import Layout from "../Layout/Layout";
import styles from "./index.module.scss";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../services/AuthContext";


export default function LandingPage() {

    const { googleSignIn } = UserAuth();


    const handleLoginWithGoogle = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Layout>
            <div className={styles.landingPage}>                

                <div className={styles.back}>

                <div style={{ display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'}}>
                <GoogleButton onClick={handleLoginWithGoogle} />

                {getDisplayName}

                </div>
                
                </div>


            </div>


        </Layout>

        
    );
}
