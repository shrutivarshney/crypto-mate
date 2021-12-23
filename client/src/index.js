import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		      <App />
    </React.StrictMode>,
	document.getElementById("root")
)


reportWebVitals()
