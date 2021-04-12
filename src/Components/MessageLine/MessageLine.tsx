import Message from "Models/Message";
import styles from "./MessageLine.module.scss";

type MessageLinePropTypes = {
	message: Message;
};

function MessageLine({ message }: MessageLinePropTypes) {
	return (
		<p
			className={styles.container}
			style={{
				backgroundColor: message.background_color,
				color: message.text_color,
			}}
		>
			{message.text}
		</p>
	);
}

export default MessageLine;
