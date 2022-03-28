/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<>
			<Head>
				<title>Maple &mdash; A Real Estate Company</title>
			</Head>
			<div>
				<LocomotiveScrollProvider
					options={{ smooth: true, lerp: 0.02 }}
					containerRef={containerRef}
					watch={[]}
				>
					<div data-scroll-container ref={containerRef} id="scroll-container">
						<div data-scroll-section>
							<header className="header">
								<div className="header__left">
									<nav className="navigation">
										<img src="/svg/maple-logo.svg" alt="logo" />
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
							<main className="main">
								<section className="section-features">
									<div className="feature-container">
										<div className="feature">
											<img src="/svg/faces-icon.svg" alt="face" />
											<h2 className="heading-h2">
												Familiar <br />
												Faces
											</h2>
											<p className="paragraph">
												Our facial recognition system cross-references faces
												attempting to gain access into the Heatrow Estate with
												the register database of residents. We value your safety
												so no one gets in unless you say so.
											</p>
										</div>
										<div className="feature">
											<img src="/svg/eye-icon.svg" alt="face" />
											<h2 className="heading-h2">
												Eye in the <br />
												Sky
											</h2>
											<p className="paragraph">
												Our infrared (IR) outdoor bullet cameras are immune to
												whatever or lighting, and come in different resolutions
												and lenses. Sit back anywhere in the world and record
												everything going on in and around your home with crisp
												clear audio.
											</p>
										</div>
										<div className="feature">
											<img src="/svg/anpr-icon.svg" alt="face" />
											<h2 className="heading-h2">ANPR</h2>

											<p className="paragraph">
												Our Automatic Number Plate Recognition system scans
												every plate trying to gain access into the Heatrow
												estate and cross references with our database of
												registered plates. Our advances algorithms can decode
												even blurry and dark images.
											</p>
										</div>
										<div className="feature">
											<img src="/svg/smart-icon.svg" alt="face" />
											<h2 className="heading-h2">
												Smart <br />
												Savings
											</h2>
											<p className="paragraph">
												Save up to 50% more energy with our smart
												energy-consumption monitoring. Enjoy smart system in
												your home that help you dim lights, and even turn off
												home appliances when not in use. Even water leakages are
												detected in real-time if you ever leave the tap running.
											</p>
										</div>
										<div className="feature">
											<img src="/svg/wifi-icon.svg" alt="face" />
											<h2 className="heading-h2">
												Fibre to <br />
												the Home
											</h2>
											<p className="paragraph">
												Our finer-optic cables are setup around the estate to
												deliver lightening fast internet whenever you need it at
												the comfort of your home. We present to you the future
												of broadband.
											</p>
										</div>
										<div className="feature">
											<img src="/svg/door-icon.svg" alt="face" />
											<h2 className="heading-h2">
												The Walls <br />
												Have Ears
											</h2>
											<p className="paragraph">
												Lock the doors, open the windows control the lights, and
												much more without lifting a finger, The tongue really is
												powerful. Go on, Speak, your home us listening.
											</p>
										</div>
									</div>
								</section>
								<section className="section-gallery">
									<h2 className="heading-h2">
										Live in the <br /> Future
									</h2>
									<div className="gallery">
										<div className="gallery__left">
											<div className="gallery__left--top">
												<img
													src="/webp/villa-bg.webp"
													alt="villa"
													className="img-gallery"
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
													<img
														src="/webp/oak-bg.webp"
														alt="oak"
														className="img-gallery"
													/>
													<h4 className="gallery-caption">155 oakville</h4>
												</div>
												<div className="gallery__right--top-right">
													<img
														src="/webp/oakville-bg.webp"
														alt="oakville"
														className="img-gallery"
													/>
													<h4 className="gallery-caption">30 oakville</h4>
												</div>
											</div>
											<div className="gallery__right--bottom">
												<img
													src="/webp/maple.webp"
													alt="maple"
													className="img-gallery"
												/>
												<h4 className="gallery-caption">234 maple</h4>
											</div>
										</div>
									</div>
								</section>
							</main>{" "}
						</div>
					</div>
				</LocomotiveScrollProvider>
			</div>
		</>
	);
}
