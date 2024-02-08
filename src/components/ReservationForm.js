import React, { useState } from "react";

const ReservationForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" onChange={handleChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" onChange={handleChange} />
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" min="1" onChange={handleChange} />
        </label>
        <label>
          Occasion:
          <select name="occasion" onChange={handleChange}>
            <option value="">Select...</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: "green",
            color: "white",
            margin: "20px 6px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
      </form>

      {submitted && formState.occasion && formState.date && (
        <p style={{ color: "green", fontSize: "40px" }}>
          Congratulations, you have reserved a table for {formState.occasion}!
        </p>
      )}
    </div>
  );
};

export default ReservationForm;
