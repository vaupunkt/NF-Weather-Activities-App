import "./Weather.style.css";

export default function Weather({ weather, isGoodWeather }) {
	if (weather.isGoodWeather === true) {
		return (
			<>
				<section className="description__data">
					<span className="description__icon">{weather.condition}</span>
					<p>{weather.temperature}°C</p>
				</section>
				<p className="list__description">
					The weather is awesome!
					<br />
					Go outside and:
				</p>
			</>
		);
	} else if (weather.isGoodWeather === false) {
		return (
			<>
				<section className="description__data">
					<span className="description__icon">{weather.condition}</span>
					<p>{weather.temperature}°C</p>
				</section>
				<p className="description__text">
					Bad weather outside! Here's what you can do now:
				</p>
			</>
		);
	} else {
		return (
			<p className="description__text">
				Trying to load current weather...
				<br />
				Here are all your tasks:
			</p>
		);
	}
}
