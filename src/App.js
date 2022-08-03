import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpperNavbar from './components/UpperNavbar';
import Banner from './components/Banner'
import LowerNavbar from './components/LowerNavbar';
import Footer from './components/Footer';
import Alerts from "./pages/Alerts";
import Calendar from "./pages/Calendar";
import Fees from "./pages/Fees";
import PlanYourVisit from "./pages/PlanYourVisit";
import Info from "./pages/Info";
import Maps from "./pages/Maps";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <UpperNavbar/>
      <Banner/>
      <LowerNavbar/>
      <Routes>
        <Route path= "/" element={<PlanYourVisit/>} />
        <Route path="/Alerts" element={<Alerts/>} />
        <Route path="/Calendar" element={<Calendar/>} />
        <Route path="/Fees" element={<Fees/>} />
        <Route path="/Info" element={<Info/>} />
        <Route path="/Maps" element={<Maps/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
