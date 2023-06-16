import "./List.style.css";
import ListItem from "./ListItem/ListItem";

export default function List({ activities, isGoodWeather }) {
	if (activities.length === 0) {
		console.log("No acitivities");
		return <></>;
	} else if (isGoodWeather != null) {
		return (
			<ul className="list" aria-label="List of Activities">
				{activities.map((activity) => {
					return <ListItem key={activity.id}>{activity.name}</ListItem>;
				})}
			</ul>
		);
	} else {
		return (
			<ul className="list" aria-label="List of Activities">
				{activities.map((activity) => {
					return <ListItem key={activity.id}>{activity.name}</ListItem>;
				})}
			</ul>
		);
	}
}
