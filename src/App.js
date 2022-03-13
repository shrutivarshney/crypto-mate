import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GraphPage from "./Pages/GraphPage"
import Homepage from "./Pages/homepage"
import Videos from "./Pages/Videos"

function App() {
	return (
		<BrowserRouter>
			<div className="App bg-[url('../public/bg.png')] bg-repeat font-poppins">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/GraphPage" element={<GraphPage/>} />
					<Route path="/Videos" element={<Videos/>} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App;