import React from "react";
import { useState, useContext } from "react";
import { RestuarantsContext } from "../context/RestuarantsContext";

const Addrestuarant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const { addRestuarant } = useContext(RestuarantsContext);

  const url = "http://localhost:5000/api/v1/restuarants";
  const handleSubmit = async function (e) {
    e.preventDefault();
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        location: location,
        price_range: priceRange,
      }),
    });
    const data = await response.json();
    const newRestuarant = data.payload[0];
    console.log(data.payload[0]);
    addRestuarant(newRestuarant);
    //clears input fields back to original state
    setName("");
    setLocation("");
    setPriceRange("Price Range");
  };
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addrestuarant;
