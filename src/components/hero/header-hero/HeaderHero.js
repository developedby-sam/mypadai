import React from "react";
import "./HeaderHero.scss";

class HeaderHero extends React.Component {
	constructor() {
		super();

		this.state = {
			imageUrls: [
				"https://bit.ly/3fSf6FZ",
				"https://bit.ly/3ihgdRh",
				"https://bit.ly/3fSmDVp",
				"https://bit.ly/3z2HOvf",
				"https://bit.ly/3vUuTty",
			],
		};
	}

	slide() {
		this.slides.forEach(
			(slide, index) =>
				(slide.style.transform = `translateX(${100 * (index - this.slideNo)}%)`)
		);
	}

	nextSlide = () => {
		if (this.slideNo === this.slides.length - 1) {
			this.slideNo = 0;
		} else {
			this.slideNo++;
		}
		this.slide();
	};

	previousSlide = () => {
		if (this.slideNo === 0) {
			this.slideNo = this.slides.length - 1;
		} else {
			this.slideNo--;
		}
		this.slide();
	};

	componentDidMount() {
		this.slides = document.querySelectorAll(".slide");
		this.slideNo = 0;
		this.slide();

		setInterval(() => {
			this.nextSlide();
		}, 3000);
	}

	render() {
		return (
			<div className="header-hero">
				<button className=" btn btn-previous" onClick={this.previousSlide}>
					Previous
				</button>
				<div className="slider">
					<div className="slide">
						<div
							className="image"
							style={{
								backgroundImage: `url(${this.state.imageUrls[0]})`,
							}}
						>
							<p>Research !</p>
						</div>
					</div>
					<div className="slide">
						<div
							className="image"
							style={{
								backgroundImage: `url(${this.state.imageUrls[1]})`,
							}}
						>
							<p>Explore !</p>
						</div>
					</div>
					<div className="slide">
						<div
							className="image"
							style={{
								backgroundImage: `url(${this.state.imageUrls[2]})`,
							}}
						>
							<p>Grow !</p>
						</div>
					</div>
					<div className="slide">
						<div
							className="image"
							style={{
								backgroundImage: `url(${this.state.imageUrls[3]})`,
							}}
						>
							<p>Succeed !</p>
						</div>
					</div>
					<div className="slide">
						<div
							className="image"
							style={{
								backgroundImage: `url(${this.state.imageUrls[4]})`,
							}}
						>
							<p>Dance !</p>
						</div>
					</div>
				</div>
				<button className="btn btn-next" onClick={this.nextSlide}>
					Next
				</button>
			</div>
		);
	}
}

export default HeaderHero;
