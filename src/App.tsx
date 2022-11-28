import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from "./containers/Home/Home";
import ReactPage from "./containers/ReactPage/ReactPage";


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
            <h1>TS page</h1>
          )}/>
          <Route path="/examples" element={(
            <h1>Examples</h1>
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
