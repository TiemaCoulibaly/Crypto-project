import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Navigation from "./components/router/Navigation";
import Routes from "./components/router/routes";
=======
import Navigation from "./components/navbar/Navigation";
import Routes from "./components/router/Routes";
>>>>>>> 380a26ffadf50c6e6ee8ae0ed1a906a3c46b2465
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
