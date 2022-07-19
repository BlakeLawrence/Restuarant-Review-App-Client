import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestuarantsContext } from "../context/RestuarantsContext";

const RestuarantdetailPage = () => {
  const { id } = useParams();
  const { selectedRestuarant, setSelectedRestuarant } =
    useContext(RestuarantsContext);
  const url = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(`${url}/api/v1/restuarants/${id}`);
      const data = await response.json();
      console.log(data.payload[0]);
      setSelectedRestuarant(data.payload[0]);
    };
    fetchData();
  }, []);

  return <div>{selectedRestuarant && selectedRestuarant.name}</div>;
};

export default RestuarantdetailPage;
