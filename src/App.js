import { BrowserRouter as Router, Route } from "react-router-dom"
import phishing from "./pages/phishing";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Fuked from "./pages/Fuked";

function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/phishing" component={phishing} />
        <Route path="/scan" component={Scan} />
        <Route path="/fuked" component={Fuked} />
    </Router>
  );
}

export default App;
