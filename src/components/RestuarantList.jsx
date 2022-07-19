import React from "react";
import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { RestuarantsContext } from "../context/RestuarantsContext";

const RestuarantList = () => {
  const { restuarants, setRestuarants } = useContext(RestuarantsContext);

  let history = useHistory();

  const url = process.env.REACT_APP_BACKEND_URL;

  // show all restuarants on screen
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${url}/api/v1/restuarants`);
      const data = await response.json();
      console.log(data.data.restuarants);
      setRestuarants(data.data.restuarants);
    }
    fetchData();
  }, [setRestuarants, url]);

  // delete a restuarant (assigned to button below)
  const handleDelete = async function (id) {
    await fetch(`${url}/api/v1/restuarants/${id}`, {
      method: "DELETE",
    });
    setRestuarants(
      restuarants.filter((restuarant) => {
        return restuarant.id !== id;
      })
    );
  };

  const handleUpdate = function (id) {
    history.push(`/restuarants/${id}/update`);
  };

  return (
    <div>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restuarant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restuarants &&
            restuarants.map((restuarant) => {
              return (
                <tr key={restuarant.id}>
                  <td>{restuarant.name}</td>
                  <td>{restuarant.location}</td>
                  <td>{"$".repeat(restuarant.price_range)}</td>
                  <td>Reviews</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(restuarant.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(restuarant.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestuarantList;
