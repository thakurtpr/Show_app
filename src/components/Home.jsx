import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const ShowCard = ({ show }) => {
  return (
    <div className="show_card">
      <img src={show.image?.medium} alt={show.name} />
      <h3>{show.name}</h3>
    </div>
  );
};

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 id="header">Show App</h1>
      <div className="show_lists">
        {shows.map((show) => (
          <Link key={show.show.id} to={`/show/${show.show.id}`}>
            <ShowCard show={show.show} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
