import React, { useEffect, useReducer, useState } from "react";
import { Booking } from "./Booking";
import { Confirming } from "./Confirming";
import { useNavigate } from "react-router-dom";
import { MultiStepForm } from "../MultiStepForm";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function BookingForm() {
  const [bookingValues, setBookingValues] = useState({
    indoor: false,
    date: "",
    occasion: "",
    outdoor: false,
    diners: "",
    time: "",
  });

  const updateFields = (name, value) => {
    setBookingValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [goToStep2, setGoToStep2] = useState(false);
  const [goToStep1, setGoToStep1] = useState(false);

  const formik = useFormik({
    initialValues: {
      user_name: "",
      last_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("First Name is required"),
      last_name: Yup.string().required("last Name is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(20, "Too short, minimum 20 letters")
        .required("Comment is required"),
    }),
    onSubmit: (values) => {
      // formik.resetForm();
      if (
        bookingValues.date !== "" &&
        bookingValues.time !== "" &&
        bookingValues.diners !== "" &&
        bookingValues.occasion !== ""
      ) {
        submitForm(bookingValues);
      }
    },
  });

  const seededRandom = (seed) => {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 5; i < 10; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = (formData) => {
    return true;
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  const { component, next, back } = MultiStepForm([
    <Booking
      key={1}
      BookingValues={bookingValues}
      updateFields={updateFields}
      dispatch={dispatch}
      availableTimes={availableTimes}
      goToStep2={(goToStep2) => setGoToStep2(goToStep2)}
    />,
    <Confirming
      key={2}
      BookingValues={bookingValues}
      updateFields={updateFields}
      goToStep1={(goToStep1) => setGoToStep1(goToStep1)}
      formik={formik}
    />,
  ]);

  useEffect(() => {
    switch (component.key) {
      case "1":
        if (goToStep2) next();
        setGoToStep2(false);
        break;
      case "2":
        if (goToStep1) back();
        setGoToStep1(false);
        break;
      default:
        break;
    }
    // console.log(goToStep1);
  });

  return (
    <div className="justify-center flex mt-3 w-[100vw]">
      <form onSubmit={handleSubmit} className="bg-[#495E59]">
        {component}
      </form>
    </div>
  );
}
