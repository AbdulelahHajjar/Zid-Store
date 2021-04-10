type SpacerPropTypes = {
	height?: string;
	width?: string;
};

function Spacer({ width, height }: SpacerPropTypes) {
	return (
		<div
			style={{
				display: "block",
				width: width ?? "0",
				height: height ?? "0",
			}}
		></div>
	);
}

export default Spacer;
