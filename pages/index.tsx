/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Header";

export default function Home() {
	return (
		<>
			<Head>
				<title>Maple &mdash; A Real Estate Company</title>
			</Head>

			<header className="header">
				<div className="header__left">
					<nav className="navigation">
						<img src="/svg/heatrow-logo.svg" alt="logo" />
						<ul className="navigation__list">
							<li className="navigation__item">Home</li>
							<li className="navigation__item">Features</li>
							<li className="navigation__item">Services</li>
							<li className="navigation__item">FeedBacks</li>
						</ul>
					</nav>
					<div className="hero">
						<h4 className="hero-h4">
							Elegantly designed <br />
							bedroom apartments
						</h4>
						<h1 className="hero-h1">Maple</h1>
					</div>
				</div>
				<div className="header__right">
					<img src="/webp/header-bg.webp" alt="" />
					<div className="hero-unit">
						<h2 className="hero-unit__h2">444</h2>
						<p className="hero-unit__p">TOTAL UNITS</p>
					</div>
				</div>
			</header>
		</>
	);
}
