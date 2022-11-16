import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html>
            <Head>
                <link 
                    rel="shortcut icon" 
                    href="/favicon.ico" 
                />
                
                <link 
                    href="https://fonts.googleapis.com" 
                    rel="preconnect" 
                />
                <link 
                    href="https://fonts.gstatic.com" 
                    rel="preconnect" 
                    crossOrigin=""
                />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&family=Inter:wght@400;700&display=swap" 
                    rel="stylesheet"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;