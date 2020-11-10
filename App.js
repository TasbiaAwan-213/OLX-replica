import React from 'react';
import './Props.css';
import './App.css';
import { BrowserRouter, Route, Link} from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/Home";
import Footer from "./components/Footer";

function App() {
   return (
        <BrowserRouter>
          <Header />
          <Route path="/" Component={HomePage} />
          <Footer/>
        </BrowserRouter>
    );
}

export default App;
