import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.scss"
import Navbar from "./components/Navbar/navbar.js"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
        <Navbar />
			</div>		
		</BrowserRouter>
	)
}

export default App
