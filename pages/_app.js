import Head from "next/head";
import { Fragment } from "react";

import '/styles/tailwind.css'

function App({ Component, pageProps }) {

	return (
		<Fragment>
			<Head>

				<title>Definitely a Real News Website</title>

				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" href="/favicon/logo.svg" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#e29b36" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.definitely-real-news-site.gq/" />
				<meta property="og:title" content="Definitely a Real News Site" />
				<meta property="og:description" content="Just don't question it" />
				<meta property="og:image" content="https://www.definitely-real-news-site.gq/images/small_logo.svg" />
				<meta name="twitter:card" content="summary_large_image" />

				<script data-ad-client="ca-pub-4747481991518815" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/hkl8uis.css"
				/>
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
				/>


			</Head>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default App;