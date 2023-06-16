import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List";
import Weather from "./components/Weather/Weather";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    newActivity = { ...newActivity, id: uid() };
    setActivities([newActivity, ...activities]);
  }

  const [weather, setWeather] = useState({});

  //const isGoodWeather = false;
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/"
        );

        if (response.ok) {
          const data = await response.json();
          setWeather(data);
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
  console.log("isGoodWeather:", weather.isGoodWeather);
  //   isGoodWeather = weather.isGoodWeather;

  let filteredActivities = [];
  if (weather.isGoodWeather != null) {
    filteredActivities = activities.filter(
      (activity) => activity.isForGoodWeather === weather.isGoodWeather
    );
  } else {
    filteredActivities = activities;
  }

  return (
    <div className="App">
      <Weather weather={weather} />
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
