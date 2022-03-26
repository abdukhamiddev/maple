import { useRouter } from "next/router";
import "../styles/globals.scss";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function handleExitComplete() {
	if (typeof window !== "undefined") {
		window.scrollTo({ top: 0 });
	}
}
function MyApp({ Component, pageProps }: any) {
	const router = useRouter();
	const scrollRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		import("locomotive-scroll").then((locomotiveModule) => {
			//@ts-ignore
			const scroll = new locomotiveModule.default({
				el: scrollRef.current,
				smooth: true,
			});
		});
	}, []);

	return (
		<div ref={scrollRef}>
			<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
