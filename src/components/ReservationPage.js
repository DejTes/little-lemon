import React from 'react';
import "../styles/ReservationPage.css";
import ReservationForm from './ReservationForm';


const  ReservationPage = () => {

  return (
    <div className="content-wrapper">
        <div className="content-container">
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <ReservationForm />
            </div>
        </div>
    </div>
  )
}

export default ReservationPage
