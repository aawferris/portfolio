import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home";
import Layout from "./components/shared/Layout/Layout";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import DetailsProject from "./screens/DetailsProject/DetailsProject";
// import Portfolio from "./screens/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/details" component={DetailsProject} />
          {/* <Route path="/portfolio" component={Portfolio} /> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
