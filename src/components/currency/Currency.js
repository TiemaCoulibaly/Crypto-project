import React from "react";
import "./currency.scss";

const Currency = () => {
	return (
		<>
			<header>
				<img
					className="crystal-logo"
					src="images/crystalcoin.png"
					alt=""
				/>
				<h1 className="currency__title">
					<a href="/index.html">Crystal</a>
				</h1>
				<nav className="menu">
					<ul className="menu__list">
						<li className="menu__list--title">
							<a href="/markets.html">Marchés</a>
						</li>
						<li className="menu__list--title">
							<a href="/currency.html">Ethereum</a>
						</li>
						<li className="menu__list--title">
							<a href="/portfolio.html">Porte-monnaie</a>
						</li>
						<li className="menu__list--title">
							<a href="/login.html">Se connecter / S'inscrire</a>
						</li>
					</ul>
				</nav>
			</header>
			<nav className="currencies">
				<ul className="currencies__list">
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>2 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
					<li className="currencies__list--content">
						<img
							src="public/images/ethereum-logo.png"
							className="currency__logo"
							alt=""
						/>
						<a href="/">
							ETH <span>20 000 $</span>
						</a>
					</li>
				</ul>
			</nav>
			<main>
				<h3 className="currency__name">
					<img
						src="public/images/ethereum-logo.png"
						className="currency__name--logo"
						alt=""
					/>
					Ethereum
				</h3>
				<h4>2 000 $</h4>
				<img
					className="currency__chart"
					src="public/images/canvas.png"
					alt=""
				/>
				<button>1J</button>
				<button>1M</button>
				<button>Tous</button>
			</main>
			<footer className="footer">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Maiores, hic.
			</footer>
		</>
	);
};

export default Currency;
