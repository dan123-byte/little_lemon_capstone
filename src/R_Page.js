import Header from "./components/Header";
import Reserve from "./components/reserve/Reserve";
import Form from "./components/reserve/Form";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import React, { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from './api';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};

export default function R_Page() {
    const navigate = useNavigate();

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const [bookings, setBookings] = useState(() => {
        return JSON.parse(localStorage.getItem("bookings")) || [];
    });

    useEffect(() => {
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }, [bookings]);

    const handleDateChange = (e) => {
      const newDate = e.target.value;
      setDate(newDate);
      dispatch({ type: "UPDATE_TIMES", date: newDate });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = { date, time, guests, occasion, fullname, email, phone };

      const updatedBookings = [...bookings, formData];
      setBookings(updatedBookings);

      const submitForm = (formData) => {
        if (submitAPI(formData)) {
          navigate("/confirmed", { state: { bookings: updatedBookings } });
        } else {
          alert("Failed to submit booking. Please try again.");
        }
      };

      submitForm(formData);

      setDate('');
      setTime('');
      setGuests(1);
      setOccasion('');
      setFullname('');
      setEmail('');
      setPhone('');
    };

 return (
      <>
        <Header />
        <Reserve />
        <Form
          date={date}
          setDate={handleDateChange}
          time={time}
          setTime={setTime}
          guests={guests}
          setGuests={setGuests}
          occasion={occasion}
          setOccasion={setOccasion}
          fullname={fullname}
          setFullname={setFullname}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          availableTimes={availableTimes}
          dispatch={dispatch}
          handleSubmit={handleSubmit}
        />
        <Footer />
      </>
  );
}