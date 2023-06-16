import "./App.css";
import Form from "./components/Form/Form.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./components/List/List";
import { useState, useEffect } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    newActivity = { ...newActivity, id: uid() };
    setActivities([newActivity, ...activities]);
  }

  const [weather, setWeather] = useState({});
  const [isGoodWeather, setIsGoodWeather] = useState(null);

  //const isGoodWeather = false;
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weatherr"
        );

        if (response.ok) {
          const data = await response.json();
          setWeather(data);
          setIsGoodWeather(data.isGoodWeather);
        } else {
          console.error("Data error");
        }
      } catch {
        console.error("catch");
      }
    }
    fetchWeather();
  }, []);

  //   console.log(weather.isGoodWeather);
  console.log("isGoodWeather:", isGoodWeather);
  //   isGoodWeather = weather.isGoodWeather;

  let filteredActivities = [];
  if (isGoodWeather) {
    filteredActivities = activities.filter(
      (activity) => activity.isForGoodWeather === isGoodWeather
    );
  } else {
    filteredActivities = activities;
  }

  return (
    <div className="App">
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
