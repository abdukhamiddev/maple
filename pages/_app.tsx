import { useRouter } from "next/router";
import "../styles/globals.scss";

import { AnimatePresence } from "framer-motion";

function handleExitComplete() {
	if (typeof window !== "undefined") {
		window.scrollTo({ top: 0 });
	}
}
function MyApp({ Component, pageProps }: any) {
	const router = useRouter();

	return (
		<div className="app" data-scroll-container>
			<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
