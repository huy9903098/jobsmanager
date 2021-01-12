import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Job from "./component/Job";
import Landing from "./component/Landing";
import Lists from "./component/Lists";
import { ChatProvider } from "./utils/ChatContext";
import { CustomerProvider } from "./utils/CustomerContext";
import { JobProvider } from "./utils/JobContext";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <Router>
      <JobProvider>
        <Route exact path="/" component={Landing}></Route>

        <CustomerProvider>
          <UserProvider>
            <Route exact path="/lists" component={Lists}></Route>
          </UserProvider>
        </CustomerProvider>

        <Switch>
          <ChatProvider>
            <Route exact path="/job/:id" component={Job} />
          </ChatProvider>
        </Switch>
      </JobProvider>
    </Router>
  );
}

export default App;
