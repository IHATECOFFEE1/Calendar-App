import React from "react";
import { useEffect } from "react";
import CalendarHub from "../components/CalendarHub";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import { UserAuth } from "../services/AuthContext";

export default function Home() {

  const { user} = UserAuth();

  return (

    <div>
      {user?.displayName ? (
                <div>
                  <Navbar/>
                  <CalendarHub/>
              </div>) 
                :
                ( <div>
                  <Navbar/>
                <LandingPage />
                </div>) 
            }
    </div>
  )
}