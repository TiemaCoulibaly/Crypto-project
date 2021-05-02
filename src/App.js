import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/router/Navigation";
import Routes from "./components/router/routes";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
