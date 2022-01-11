import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./navigation/Navigation";

import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="app">
      <Navigation />
      <hr />
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
