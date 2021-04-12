import React, { useEffect, useState } from "react";
import styles from "./HorizontalList.module.scss";
import ChevronLeft from "Resources/Images/chevron-left.png";

type HorizontalListPropTypes = {
	children;
	rtl?: boolean;
};

function uuidv4() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (c) {
			var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		}
	);
}

function HorizontalList({ children, rtl }: HorizontalListPropTypes) {
	let listId = uuidv4();

	const [mouseOver, setMouseOver] = useState(false);

	const scroll = (change: number) => {
		console.log(styles.container);
		let element = document.getElementById(listId)!;
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
		<div
			className={styles.root_container}
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
		>
			<div className={styles.container} id={listId}>
				{children}
			</div>
			<div className={styles.controls}>
				<button
					className={`${styles.control_button} ${
						mouseOver
							? styles.control_shown
							: styles.control_transparent
					} ${styles.flipped}`}
					onClick={() => {
						rtl ? scrollRight() : scrollLeft();
					}}
				>
					<img
						src={ChevronLeft}
						className={styles.control_image}
						alt="Scroll"
					/>
				</button>
				<button
					className={`${styles.control_button} ${
						mouseOver
							? styles.control_shown
							: styles.control_transparent
					}`}
					onClick={() => {
						rtl ? scrollLeft() : scrollRight();
					}}
				>
					<img
						src={ChevronLeft}
						className={styles.control_image}
						alt="Scroll"
					/>
				</button>
			</div>
		</div>
	);
}

export default HorizontalList;

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
