import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddReview from "../components/AddReview";
import Reviews from "../components/Reviews";
import { RestuarantsContext } from "../context/RestuarantsContext";

const RestuarantdetailPage = () => {
  const { id } = useParams();
  const { selectedRestuarant, setSelectedRestuarant } =
    useContext(RestuarantsContext);

  // Url for backend

  const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(`${url}/api/v1/restuarants/${id}`);
      const data = await response.json();
      console.log(data.payload);
      console.log(data.payload.reviews);
      setSelectedRestuarant(data.payload);
    };
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestuarant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestuarant.restuarant[0].name}
          </h1>
          <div className="mt-3">
            <Reviews reviews={selectedRestuarant.reviews} />
          </div>
        </>
      )}
      <AddReview />
    </div>
  );
};

export default RestuarantdetailPage;
