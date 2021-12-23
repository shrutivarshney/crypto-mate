import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"
import Homepage from "./Pages/homepage"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

function App() {
	return (
		<BrowserRouter>
			<div className="App bg-[url('../public/bg.png')] bg-repeat font-poppins">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Register" element={<Register />} />

				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App;