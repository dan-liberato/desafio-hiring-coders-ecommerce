import React, { useEffect } from "react";
import { GlobalStyle } from "./styles/globals";
import Router from "./routes";

import { data } from "./services/data";

function App() {
	useEffect(() => {
		localStorage.setItem("allProducts", JSON.stringify(data));
	}, []);

	return (
		<>
			<GlobalStyle />
			<Router />
		</>
	);
}

export default App;
