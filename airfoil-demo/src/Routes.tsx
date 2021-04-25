import { Router, Route } from "preact-router";
import App from "./app";
import Ring from "./components/Ring";
import { Link } from "preact-router/match";

const Routes = () => (
  <div>
    <nav>
    <Link activeClassName="active" href="/">
        Index
      </Link>
      <Link activeClassName="active" href="/home">
        Home
      </Link>
      <Link activeClassName="active" href="/ring">
        Ring
      </Link>
    </nav>
    <Router>
      <Route path="/ring" component={Ring} />
      <Route path="/home" component={App} />
      <Route path="/" component={App} />

    </Router>
  </div>
);

export default Routes;
