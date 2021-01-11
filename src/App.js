import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Job from "./component/Job/Job";
import Landing from "./component/Landing/Landing";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Switch>
        <Route exact path="/job/:id" component={Job} />
      </Switch>
    </Router>
  );
}

export default App;
