import React from "react";
import ReactDOM from "react-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App";
import { GoogleAuthProvider } from "./components/context/googleAuth";

ReactDOM.render(
	<React.StrictMode>
		<GoogleAuthProvider>
			<App />
		</GoogleAuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
