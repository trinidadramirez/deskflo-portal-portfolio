import React from "react";
import "./App.css";
import "./styles/deskFloColor.css";
import { LoginPage } from "./pages/login/LoginPage";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { MyTicketsPage } from "./pages/my-tickets/MyTicketsPage";
import { CreateTicketPage } from "./pages/create-ticket/CreateTicketPage";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <PrivateRoute path="/my-tickets">
            <MyTicketsPage />
          </PrivateRoute>
          <PrivateRoute path="/create-ticket">
            <CreateTicketPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
