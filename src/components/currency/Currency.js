import React from "react";
import "./currency.scss";

const Currency = () => {
	let sliders = document.querySelectorAll(".slider-wrapper");

	window.addEventListener("resize", () => {
		for (let i = 0; i < sliders.length; i++) {
			setWrapperWidth(sliders[i]);
		}
	});

	for (let i = 0; i < sliders.length; i++) {
		let slider = sliders[i].querySelector(".slider");
		let wrapper = slider.querySelector(".wrapper");

		setWrapperWidth(sliders[i]);

		// event listeners droite/gauche
		let navR = sliders[i].querySelector("nav .right");
		let navL = sliders[i].querySelector("nav .left");

		slider.addEventListener("scroll", () => {
			if (slider.scrollLeft === 0) navL.classList.add("disabled");
			else navL.classList.remove("disabled");

			if (slider.scrollLeft >= wrapper.clientWidth - slider.clientWidth)
				navR.classList.add("disabled");
			else navR.classList.remove("disabled");
		});

		if (navR)
			navR.addEventListener("click", (e) => {
				navL.classList.remove("disabled");
				transition(slider, 0, slider.clientWidth, "right", () => {
					if (
						slider.scrollLeft >=
						wrapper.clientWidth - slider.clientWidth
					) {
						navR.classList.add("disabled");
					}
				});
			});

		if (navL)
			navL.addEventListener("click", (e) => {
				navR.classList.remove("disabled");
				transition(slider, 0, slider.clientWidth, "left", () => {
					if (slider.scrollLeft === 0) navL.classList.add("disabled");
				});
			});
	}

	function transition(el, from, to, dir, cb) {
		let inc = from;
		let spd = 20;
		let interval = setInterval(() => {
			if (inc >= to) {
				clearInterval(interval);
				spd = to - inc;
				cb(); // callback
			}
			el.scrollLeft =
				dir === "right" ? el.scrollLeft + spd : el.scrollLeft - spd;
			inc += spd;
		}, 8);
	}

	function setWrapperWidth(sliderWrapper) {
		let slider = sliderWrapper.querySelector(".slider");
		let wrapper = slider.querySelector(".wrapper");
		let slides = wrapper.querySelectorAll(".slide");
		wrapper.style.width = slides.length * slides[0].clientWidth + "px";
	}

	return (
		<>
			<nav className="menu"></nav>
			<main>
				<h3 className="currency__name">Ethereum</h3>
				<h4>2 000 $</h4>
				<img
					className="currency__chart"
					src="images/test_chart.png"
					alt="currency chart"
				/>
				<div class="currency__buttons">
					<button class="currency__button">1J</button>
					<button class="currency__button">1M</button>
					<button class="currency__button">Tous</button>
				</div>
			</main>

			<div class="container">
				<div id="currencies" class="section">
					<div class="slider-wrapper">
						<div class="slider currencies">
							<div class="wrapper">
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
								<div class="currency slide category">
									<figure>
										<a href="https://github.com/Mehdi-Adel/Crypto-project">
											<img
												src="images/ethereum.png"
												alt="ethereum"
											/>
										</a>
									</figure>
									<h4>2 000$</h4>
								</div>
							</div>
						</div>
						<nav>
							<div class="left disabled">
								<i class="fas fa-chevron-left"></i>
							</div>
							<div class="right">
								<i class="fas fa-chevron-right"></i>
							</div>
						</nav>
					</div>
				</div>
			</div>

			<footer className="footer">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Maiores, hic.
			</footer>
		</>
	);
};

export default Currency;
