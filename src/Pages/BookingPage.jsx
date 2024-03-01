import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Components/Header";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import BookingForm from "../Components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

export default function BookingPage() {
  const [date, setDate] = useState(new Date());

  function initializeTimes(date) {
    return fetchAPI(date);
  }

  function updateTimes(date) {
    const dateObj = new Date(date);
    return fetchAPI(dateObj);
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }

  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case "UPDATE_TIMES":
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate);
        break;

      default:
        throw new Error();
    }
    return newState;
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));
  return (
    <div className="overflow-hidden">
      <Header />
      {/* <Main /> */}
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
      <Menu />
      <Footer />
    </div>
  );
}
