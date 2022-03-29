/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { motion } from "framer-motion";
import FeatureItem from "../components/FeatureItem";
import Features from "../components/Features";
import GalleryImage from "../components/GalleryImage";
const transition: { duration: number; ease: number[] } = {
	duration: 1.4,
	ease: [0.6, 0.01, -0.05, 0.9],
};

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<>
			<Head>
				<title>Maple &mdash; A Real Estate Company</title>
			</Head>
			<div>
				<LocomotiveScrollProvider
					options={{
						smooth: true,
						lerp: 0.05,
						smartphone: {
							smooth: true,
						},
						tablet: {
							smooth: true,
						},
					}}
					containerRef={containerRef}
					watch={[]}
				>
					<div data-scroll-container ref={containerRef} id="scroll-container">
						<div data-scroll-section>
							<header className="header">
								<div className="header__left">
									<nav className="navigation">
										<motion.img
											src="/svg/maple-logo.svg"
											alt="logo"
											initial={{
												x: -50,
												opacity: 0,
											}}
											animate={{
												x: 0,
												opacity: 1,
												transition: { ...transition },
											}}
										/>
										<motion.ul
											transition={{
												ease: transition.ease,
												delay: 1.6,
												staggerChildren: 0.04,
												delayChildren: 0.6,
												staggerDirection: 1,
											}}
											className="navigation__list"
										>
											<motion.li
												initial={{ y: 50, opacity: 0 }}
												animate={{
													y: 0,
													opacity: 1,
													transition: { ...transition },
												}}
												className="navigation__item"
											>
												Home
											</motion.li>
											<motion.li
												initial={{ y: 50, opacity: 0 }}
												animate={{
													y: 0,
													opacity: 1,
													transition: { ...transition, delay: 0.3 },
												}}
												className="navigation__item"
											>
												Features
											</motion.li>
											<motion.li
												initial={{ y: 50, opacity: 0 }}
												animate={{
													y: 0,
													opacity: 1,
													transition: { ...transition, delay: 0.4 },
												}}
												className="navigation__item"
											>
												Services
											</motion.li>
											<motion.li
												initial={{ y: 50, opacity: 0 }}
												animate={{
													y: 0,
													opacity: 1,
													transition: { ...transition, delay: 0.6 },
												}}
												className="navigation__item"
											>
												FeedBacks
											</motion.li>
										</motion.ul>
									</nav>
									<div className="hero">
										<motion.h4
											className="hero-h4"
											initial={{ y: 50, opacity: 0 }}
											animate={{
												y: 0,
												opacity: 1,
												transition: { delay: 0.2, ...transition },
											}}
										>
											Elegantly designed <br />
											bedroom apartments
										</motion.h4>
										<motion.h1
											className="hero-h1"
											initial={{ y: 50, opacity: 0 }}
											animate={{
												y: 0,
												opacity: 1,
												transition: { delay: 0.6, ...transition },
											}}
										>
											Maple
										</motion.h1>
									</div>
								</div>
								<div className="header__right">
									<motion.img
										src="/webp/header-bg.webp"
										alt=""
										initial={{ opacity: 0, scale: 1.4, x: 400 }}
										animate={{
											opacity: 1,
											scale: 1,
											x: 0,
											transition: { delay: 1.1, ...transition },
										}}
									/>
									<motion.div
										className="hero-unit"
										initial={{ y: 200, opacity: 0 }}
										animate={{
											y: 0,
											opacity: 1,
											transition: { delay: 1.8, ...transition },
										}}
									>
										<h2 className="hero-unit__h2">444</h2>
										<p className="hero-unit__p">TOTAL UNITS</p>
									</motion.div>
								</div>
							</header>
							<main className="main">
								<section className="section-features">
									<Features />
								</section>
								<section className="section-gallery">
									<div className="gallery-container">
										<h2 className="heading-h2">
											Live in the <br /> Future
										</h2>
										<div className="gallery">
											<div className="gallery__left">
												<div className="gallery__left--top">
													<GalleryImage
														imgUrl="/webp/villa-bg.webp"
														altText="villa"
													/>

													<h4 className="gallery-caption">15 villa</h4>
												</div>
												<div className="gallery__left--bottom">
													<h3 className="gallery-h3">
														Comfort <br /> is a choice
													</h3>
													<p className="gallery-p">and we offer 4 of those</p>
												</div>
											</div>
											<div className="gallery__right">
												<div className="gallery__right--top">
													<div className="gallery__right--top-left">
														<GalleryImage
															imgUrl="/webp/oak-bg.webp"
															altText="Oak"
														/>

														<h4 className="gallery-caption">155 oakville</h4>
													</div>
													<div className="gallery__right--top-right">
														<GalleryImage
															imgUrl="/webp/oakville-bg.webp"
															altText="Oakville"
														/>

														<h4 className="gallery-caption">30 oakville</h4>
													</div>
												</div>
												<div className="gallery__right--bottom">
													<GalleryImage
														imgUrl="/webp/maple.webp"
														altText="Maple"
													/>

													<h4 className="gallery-caption">234 maple</h4>
												</div>
											</div>
										</div>
									</div>
								</section>
								<div className="section section-feedback">
									<div className="feedback-container">
										<div className="feedback-left">
											<h2 className="heading-h2">
												What Others <br /> are saying
											</h2>
										</div>
										<div className="feedback-right">
											<div className="feedback-box">
												<img src="/svg/quoute-icon.svg" alt="quoute" />
												<p className="paragraph">
													I love the fact that there is a linking road in
													Mabushi opposite blue Cabana which is really amazing.
													I love the road network and the structure is
													impressive.
												</p>
												<h5 className="heading-h5">Mr & Mrs Bamidele </h5>
											</div>
											<div className="feedback-box">
												<img src="/svg/quoute-icon.svg" alt="quoute" />
												<p className="paragraph">
													Not bad I visited your site and was a bit confused
													about the villa and detached spacing but thanks to the
													officer in charge I got clarification. I am actually
													an ambassador for Cosgrove because I believe in the
													brand.
												</p>
												<h5 className="heading-h5">Mr & Mrs Joseph </h5>
											</div>
											<div className="feedback-box">
												<img src="/svg/quoute-icon.svg" alt="quoute" />
												<p className="paragraph">
													So far so good, services really fantastic and the area
													is fantastic. The quality of work is fantastic and I
													look forward to a more beneficial relationship.
													Cosgrove equals fantastic for me.
												</p>
												<h5 className="heading-h5">Ojo Daniel </h5>
											</div>
											<div className="feedback-box">
												<img src="/svg/quoute-icon.svg" alt="quoute" />
												<p className="paragraph">
													I love the fact that there is a linking road in
													Mabushi opposite blue Cabana which is really amazing.
													I love the road network and the structure is
													impressive.
												</p>
												<h5 className="heading-h5">Mr & Mrs Danladi </h5>
											</div>
										</div>
									</div>
								</div>
							</main>
							<footer className="footer">
								<div className="footer__container">
									<div className="footer__top">
										<h2 className="heading-2 heading-2__sub">
											Book Consultation
										</h2>
										<form className="contact-form">
											<div className="contact-form__left">
												<input type="text" placeholder="enter your name" />
												<input type="email" placeholder="enter your email" />
												<input type="tel" placeholder="enter your telephone" />
											</div>
											<div className="contact-form__right">
												<textarea placeholder="write something..."></textarea>
												<button type="submit">SEND MESSAGE</button>
											</div>
										</form>
									</div>
									<div className="footer__bottom">
										<div className="footer__bottom--box">
											<img src="/svg/maple-logo.svg" alt="" />
										</div>
										<div className="footer-bottom--box">
											<p className="footer-p">
												1st Floor,New York 11st , <br /> Central Business
												District
											</p>
										</div>
									</div>
									<p className="footer-copyright">
										© Copyright 2022 Maple Estate
									</p>
								</div>
							</footer>
						</div>
					</div>
				</LocomotiveScrollProvider>
			</div>
		</>
	);
}
