// import {useTypewriter, Cursor} from 'react-simple-typewriter'
import React from 'react';
import './App.css';
import Home from '../src/PortfolioContainer/Home/Home'
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      {/* <Home /> */}
    </div>
  );
}

export default App;
