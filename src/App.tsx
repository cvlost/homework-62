import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from "./containers/Home/Home";
import ReactPage from "./containers/ReactPage/ReactPage";
import TsPage from "./containers/TsPage/TsPage";
import Examples from "./containers/Examples/Examples";
import HideAndSeek from "./components/HideAndSeek/HideAndSeek";
import TodoList from "./components/TodoList/TodoList";
import Chat from "./components/Chat/Chat";
import notFoundImg from './assets/not-found.png';
import gitLogo from './assets/github-logo.png';


function App() {
  return (
    <div className="App d-flex flex-column" style={{minHeight: '100vh'}}>
      <header className="App-header sticky-top">
        <Navbar/>
      </header>
      <main className="App-main flex-grow-1">
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
              <>
                <h4 className="p-3 d-flex align-items-center">
                  <span>Example 1. Fing the Item</span>
                  <a href="https://github.com/cvlost/homework-54"
                     className="ms-auto" target="_blank" rel="noreferrer"
                  >
                    <img src={gitLogo} alt="Git-repo"/>
                  </a>
                </h4>
                <HideAndSeek/>
              </>
            )}/>
            <Route path="2" element={(
              <>
                <h4 className="p-3 d-flex align-items-center">
                  <span>Example 2. Todo List</span>
                  <a href="https://github.com/cvlost/homework-53"
                     className="ms-auto" target="_blank" rel="noreferrer"
                  >
                    <img src={gitLogo} alt="Git-repo"/>
                  </a>
                </h4>
                <TodoList/>
              </>
            )}/>
            <Route path="3" element={(
              <>
                <h4 className="p-3 d-flex align-items-center">
                  <span>Example 3. Chat</span>
                  <a href="https://github.com/cvlost/homework-60"
                     className="ms-auto" target="_blank" rel="noreferrer"
                  >
                    <img src={gitLogo} alt="Git-repo"/>
                  </a>
                </h4>
                <Chat/>
              </>
            )}/>
          </Route>
          <Route path="*" element={(
            <div className="d-flex flex-column" style={{maxHeight: '90vh'}}>
              <h1 className="text-center text-secondary m-0 p-5">404</h1>
              <div className="flex-grow-1">
                <img className="d-block mx-auto" style={{
                  opacity: '.6',
                  maxHeight: '55vh',
                  maxWidth: '100%'
                }} src={notFoundImg} alt="Not-found"/>
              </div>
            </div>
          )}/>
        </Routes>
      </main>
      <footer className="bg-custom-darker">
        <div className="container py-4">
          <p className="text-center text-white m-0">useReact - 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
