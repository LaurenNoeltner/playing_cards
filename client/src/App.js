import Start from "./components/Start";
import CardTable from "./components/CardTable";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/CardTable" component={CardTable} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
