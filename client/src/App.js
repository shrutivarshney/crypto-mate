import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.scss"
import Navbar from "./components/Navbar/navbar.js"
import Cards from "./components/Cards/card.js"

function App() {
	return (
		<BrowserRouter>
			<div className="App bg-[url('../public/bg.png')]">
				<Navbar />
				<Cards />
			</div>		
		</BrowserRouter>
	)
}

export default App
