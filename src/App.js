import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Job from "./component/Job";
import Landing from "./component/Landing";
import Lists from "./component/Lists";
import { CustomerProvider } from "./utils/CustomerContext";
import { JobProvider } from "./utils/JobContext";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing}></Route>
      <JobProvider>
        <CustomerProvider>
          <UserProvider>
            <Route exact path="/lists" component={Lists}></Route>
          </UserProvider>
        </CustomerProvider>
      </JobProvider>
      <Switch>
        <Route exact path="/job/:id" component={Job} />
      </Switch>
    </Router>
  );
}

export default App;
