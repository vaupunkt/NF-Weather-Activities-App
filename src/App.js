import "./App.css";
import Form from "./components/Form/Form.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    console.log(newActivity);
  }

  return <Form onAddActivity={handleAddActivity}></Form>;
}

export default App;
