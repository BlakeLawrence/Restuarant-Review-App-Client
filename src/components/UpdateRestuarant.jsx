import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const UpdateRestuarant = (props) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/restuarants`;

  const { id } = useParams();

  let history = useHistory();

  // When we click on Update button, the below function sets the input fields to that restuarants details so user can amend withour having to remember.
  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      setName(data.payload[0].name);
      setLocation(data.payload[0].location);
      setPriceRange(data.payload[0].price_range);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async function (e) {
    e.preventDefault();
    console.log("submit button working");
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        location: location,
        price_range: priceRange,
      }),
    });
    history.push("/");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestuarant;
