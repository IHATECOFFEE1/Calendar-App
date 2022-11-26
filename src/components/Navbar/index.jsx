import { async } from "@firebase/util";
import React from "react";
import styles from "./index.module.scss";
import { UserAuth } from "../../services/AuthContext";


export default function Navbar() {

    const{logOut, user} = UserAuth();

        const handleSignOut = async () =>{
    
            try{
                await logOut()
            }catch(error){
                console.log(error)
            }
        }

    return (

        <div className={styles.navbar}>
            <div className={styles.title}>
                Everyday
            </div>
            <div className={styles.help}>
                Help
            </div>
            <div className={styles.about}>
                About
            </div>
            <div>
                {user?.displayName ? (
                <button onClick={handleSignOut} className={styles.logButton}>Logout</button>) 
                :
                (<button  className={styles.logButton}>Sign in</button>) 
            }
            </div>
        </div>
    );
}