import "@styles/globals.css";
import "@styles/reset.css";
import "@styles/variables.css";
import type { AppProps } from "next/app";
import { MainLayout } from "@layouts/MainLayout";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</RecoilRoot>
	);
}

export default MyApp;
