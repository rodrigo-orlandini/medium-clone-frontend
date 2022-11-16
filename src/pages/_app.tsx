import React from "react";
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { AuthContextProvider } from '../contexts/AuthContext';

import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  	return (
		<AuthContextProvider>
			<Head>
				<title>Medium Clone</title>
			</Head>

			<Component {...pageProps} />
		</AuthContextProvider>
	);
}

export default App;