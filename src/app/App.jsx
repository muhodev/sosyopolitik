import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/lists">Lists</Route>
          <Route path="/Explore">Explore</Route>
          <Route path="/">Home</Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}
