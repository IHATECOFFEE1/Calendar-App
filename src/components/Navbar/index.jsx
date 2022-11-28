import { async } from "@firebase/util";
import React from "react";
import styles from "./index.module.scss";
import { UserAuth } from "../../services/AuthContext";
import Help from "../Help";
import { GoogleButton } from "react-google-button";


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

            <div className={styles.about}>

                {user?.displayName ? 
                    <div> Welcome, 
                        {" " + user.displayName}
                    </div>
                    :
                    <div>
                        Welcome to Everyday
                    </div>
                }
            </div>
            
            <div>
                {user?.displayName ?
                <button onClick={handleSignOut} className={styles.logButton}>Logout</button>
                :
                <div className={styles.help}>Please sign in</div>
            }
            </div>
        </div>
    );
}