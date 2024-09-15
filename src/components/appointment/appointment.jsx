import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";
import "./appointment.css";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Appointment() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const availableSlots = ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment booking logic
    console.log('Appointment booked:', selectedDate, selectedSlot);
  };

  return (
    <>
      <Nav />
      <div className="appointment-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>

        <div>
          <label>Select Time Slot:</label>
          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required
          >
            <option value="" disabled>Select a time slot</option>
            {availableSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
      <Footer />
    </>
  );
}