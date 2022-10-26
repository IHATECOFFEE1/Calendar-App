import React from "react";
import Head from "next/head";
import '../../styles/globals.scss'

function MyApp({ Component, pageProps }) {
    
  return (
    <div className="App">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
        <script src = "https://accounts.google.com/gsi/client" async defer/><script/>
      </Head>
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp
