import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/router/Navigation";
import Routes from "./components/router/routes";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
