import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";
import Routes from "./components/router/Routes";
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
