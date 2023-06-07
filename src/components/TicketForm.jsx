import React, { useState } from "react";

const TicketForm = ({ showName, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
    });
    console.log(formData);
  };

  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>Book Ticket for {showName}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button id="btn" type="submit">
            Submit
          </button>
        </form>
        <button className="close_button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TicketForm;
