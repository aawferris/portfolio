import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Layout from "./components/shared/Layout/Layout";
import Portfolio from "./screens/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
