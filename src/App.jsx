import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestuarantdetailPage from "./routes/RestuarantdetailPage";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import { RestuarantsContextProvider } from "./context/RestuarantsContext";

const App = () => {
  return (
    <RestuarantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/restuarants/:id/update">
              <UpdatePage />
            </Route>
            <Route exact path="/restuarants/:id">
              <RestuarantdetailPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </RestuarantsContextProvider>
  );
};

export default App;
