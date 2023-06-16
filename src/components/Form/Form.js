import "./Form.style.css";
import Button from "../Button/Button.js";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (data.isForGoodWeather) {
      data.isForGoodWeather = true;
    } else {
      data.isForGoodWeather = false;
    }
    event.target.reset();
    event.target.name.focus();
    onAddActivity(data);
  }

  return (
    <form
      className="form"
      aria-labelledby="formHeading"
      onSubmit={handleSubmit}
    >
      <h2 className="form__header" id="formHeading">
        Add new Activity:
      </h2>
      <div className="form__row">
        <label className="form__label" htmlFor="name">
          Name:
        </label>

        <input
          className="form__input-text"
          name="name"
          id="name"
          type="text"
          required
        ></input>
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="isForGoodWeather">
          Good-weather activity:
        </label>
        <input
          className="form__input-checkbox"
          type="checkbox"
          name="isForGoodWeather"
          id="isForGoodWeather"
        ></input>
      </div>
      <div className="form__row--button">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
