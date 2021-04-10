export class Timestamp {
	date: string;
	timezone_type: number;
	timezone: string;

	constructor(date: string, timezone_type: number, timezone: string) {
		this.date = date;
		this.timezone_type = timezone_type;
		this.timezone = timezone;
	}
}
