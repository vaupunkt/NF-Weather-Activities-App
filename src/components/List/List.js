import "./List.style.css";
import ListItem from "./ListItem/ListItem";

export default function List({ activities, isGoodWeather }) {
  if (activities.length === 0) {
    console.log("No acitivities");
    return <></>;
  } else if (isGoodWeather != null) {
    return (
      <section>
        {isGoodWeather ? (
          <p className="list__description">
            The weather is awesome!
            <br />
            Go outside and:
          </p>
        ) : (
          <p className="list__description">
            Bad weather outside! Here's what you can do now:
          </p>
        )}
        <ul className="list" aria-label="List of Activities">
          {activities.map((activity) => {
            return <ListItem key={activity.id}>{activity.name}</ListItem>;
          })}
        </ul>
      </section>
    );
  } else {
    return (
      <section>
        <p className="list__description">
          Trying to load current weather...
          <br />
          Here are all your tasks:
        </p>
        <ul className="list" aria-label="List of Activities">
          {activities.map((activity) => {
            return <ListItem key={activity.id}>{activity.name}</ListItem>;
          })}
        </ul>
      </section>
    );
  }
}
