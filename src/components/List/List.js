import "./List.style.css";
import ListItem from "./ListItem/ListItem";

export default function List({ activities }) {
  return (
    <ul className="list" aria-label="List of Activities">
      {activities.map((activity) => {
        return <ListItem>{activity.name}</ListItem>;
      })}
    </ul>
  );
}
