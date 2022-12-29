import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router";
import { Home, About } from "./pages";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
