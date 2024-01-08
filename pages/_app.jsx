import '@/styles/globals.css';
import DefaultLayout from '../layouts/default';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<DefaultLayout>
			<Head>
				<title>JS College</title>
				<meta
					name="description"
					content="JavaScriptを使用して、個人開発で収益を生み出すまでの必要な技術を身につけるためのブログです。"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
					integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
			</Head>
			<Component {...pageProps} />
		</DefaultLayout>
	);
}
