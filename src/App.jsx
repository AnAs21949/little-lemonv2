import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import ConfirmedBooking from "./Pages/ConfirmedBookingPag";

export default function App() {
  return (
    <Router basename={"/little-lemonv2/"}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Reservation" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}
