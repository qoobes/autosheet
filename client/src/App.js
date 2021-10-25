import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
