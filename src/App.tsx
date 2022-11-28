import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from "./containers/Home/Home";
import ReactPage from "./containers/ReactPage/ReactPage";
import TsPage from "./containers/TsPage/TsPage";
import Examples from "./containers/Examples/Examples";


function App() {
  return (
    <div className="App">
      <header className="App-header sticky-top">
        <Navbar/>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path="/react" element={(
            <ReactPage/>
          )}/>
          <Route path="/typescript" element={(
            <TsPage/>
          )}/>
          <Route path="/examples" element={(
            <Examples/>
          )}>
            <Route path="1" element={(
              <h2>Example-01</h2>
            )}/>
          </Route>
          <Route path="*" element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
