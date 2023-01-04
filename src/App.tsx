import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import { Home, Detail } from "./pages";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mystudy-detail/:id" element={<Detail />} />
				<Route path="/recruitingstudy-detail/:id" element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;
