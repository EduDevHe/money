import "../styles/globals.css";
import "../styles/reset.css";
import "../styles/variables.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../templates/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
}

export default MyApp;
