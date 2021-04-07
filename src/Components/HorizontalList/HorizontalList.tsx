import React from "react";
import "./HorizontalList.scss";

function HorizontalList() {
    
	const scrollLeft = () => {
		let element = document.getElementById("content")!;
		var start = element.scrollLeft,
			currentTime = 0,
			increment = 20;

		console.log(start);

		var animateScroll = function () {
			currentTime += increment;
			var val = easeInOut(currentTime, start, -300, 1000);
			element.scrollLeft = val;
			if (currentTime < 1000) {
				setTimeout(animateScroll, increment);
			}
		};
		animateScroll();
	};

	const easeInOut = function (t, b, c, d) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	};

	const scrollRight = () => {};

	return (
		<div>
			<div className="left">
				left div
				<button onClick={scrollLeft}> Scrool Left </button>
			</div>
			<div className="center" id="content">
				<div className="internal">div 1</div>
				<div className="internal">div 2</div>
				<div className="internal">div 3</div>
				<div className="internal">div 4</div>
				<div className="internal">div 5</div>
				<div className="internal">div 6</div>
				<div className="internal">div 7</div>
				<div className="internal">div 8</div>
			</div>
			<div className="right">
				<button onClick={scrollRight}> Scrool Right </button>
				right div
			</div>
		</div>
	);
}

export default HorizontalList;
