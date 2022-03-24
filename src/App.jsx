import Navbar from "./components/Navbar";

import "./styles/App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}
