import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home"
import SortingPage from "./components/pages/SortingPage";
import SelectionSortPage from "./components/pages/different_algorithms/SelectionSortPage";
import InsertionSortPage from "./components/pages/different_algorithms/InsertionSortPage";




function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element = {<SelectionSortPage/>}>
        </Route>
        <Route path='/insertion' exact element = {<InsertionSortPage/>}>
        </Route>
        
        
        
      </Routes>


    </Router>
      
    </>
  );
}

export default App;