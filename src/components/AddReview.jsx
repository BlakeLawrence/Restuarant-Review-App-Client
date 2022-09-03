import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const AddReview = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const { id } = useParams();
  console.log(id);

  const history = useHistory();

  const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const handleSubmitReview = async function (e) {
    e.preventDefault();
    const response = await fetch(`${url}/api/v1/restuarants/${id}/addReview`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        review: reviewText,
        rating: rating,
      }),
    });
    const data = await response.json();
    console.log(data.payload[0]);
    history.push("/");
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            className="form-control"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleSubmitReview}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
