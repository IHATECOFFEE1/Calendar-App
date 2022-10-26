import React from "react";
import Head from "next/head";
import '../../styles/globals.scss'
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import Image from "next/Image";
import Background from "/landing.svg";


function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID Token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {

    /*Global Google*/
    
    google.accounts.id.initialize({
      client_id: "133961534603-kb8msa28jdl640p38k56t0658230o135.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { size: "large", width:400, logo_alignment: "center"}
    );

    google.accounts.id.prompt();

  }, []);
    
  return (
    <div className="App">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
        <script src = "https://accounts.google.com/gsi/client" async defer/><script/>
      </Head>
      <Component {...pageProps} />

      <div id="back">
        <Image src= {Background} 
        alt="background"
        layout="fill"
        />
      </div>

      <div id="signInDiv" 
      style={{position:'absolute', top:1050, left:1200, width:'300px', height:'300px' }}></div>
      {
        Object.keys(user).length != 0 &&
        <button onClick ={ (e) => handleSignOut(e)} style={{position:'absolute', top:1200, left:1375, width:'100px', height:'100px' }}>Sign Out</button>
      }

      

    
    { user &&
      <div>
        <h3>{user.name}</h3>
        </div>
    }

    <div id="title">
      
        <h3><center>{"EveryDay"}</center></h3>
        
        </div>
    </div>
    
  )
}

export default MyApp
