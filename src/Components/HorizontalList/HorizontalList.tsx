import "./HorizontalList.scss";

type HorizontalListPropTypes = {
	children;
	rtl?: boolean;
};

function HorizontalList({ children, rtl }: HorizontalListPropTypes) {
	const scroll = (change: number) => {
		let element = document.getElementById("content")!;
		let duration = 300;

		var start = element.scrollLeft,
			currentTime = 0,
			increment = 20;

		var animateScroll = function () {
			currentTime += increment;
			var val = easeInOut(currentTime, start, change, duration);
			element.scrollLeft = val;
			if (currentTime < duration) {
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

	const scrollLeft = () => {
		scroll(-500);
	};
	const scrollRight = () => {
		scroll(500);
	};

	return (
		<div className="root_container">
			<div className={"container"} id="content">
				{children}
			</div>
			<div className="controls">
				<button
					className="control_button"
					onClick={() => {
						rtl ? scrollRight() : scrollLeft();
					}}
				>
					{"<"}
				</button>
				<button
					className="control_button"
					onClick={() => {
						rtl ? scrollLeft() : scrollRight();
					}}
				>
					{">"}
				</button>
			</div>
		</div>
	);
}

export default HorizontalList;
