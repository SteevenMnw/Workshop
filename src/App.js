import { BrowserRouter as Router, Route } from "react-router-dom"
import Phishing from "./pages/Phishing";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Phished from "./pages/Phished";

function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/phishing" component={Phishing} />
        <Route path="/scan" component={Scan} />
        <Route path="/phished" component={Phished} />
    </Router>
  );
}

export default App;
