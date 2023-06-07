import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";
import TicketForm from "./TicketForm";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  const handleBookTicket = () => {
    localStorage.setItem("showName", show.name);
    localStorage.setItem("showId", show.id);
    console.log("exews");
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };
  if (!show) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="show_details">
      <div className="show_card">
        <img src={show.image?.medium} alt={show.name} />
      </div>
      <div className="show_content">
        <h1>{show.name}</h1>
        <h2>Summary</h2>
        <p>{show.summary}</p>
        <h2>Description</h2>
        <button onClick={handleBookTicket}>Book Ticket</button>
      </div>
      {showForm && (
        <div className="modal_container">
          <TicketForm showName={show.name} onClose={handleFormClose} />
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
