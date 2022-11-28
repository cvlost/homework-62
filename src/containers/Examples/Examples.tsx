import React from 'react';
import reactLogo from "../../assets/react-logo.svg";
import tsLogo from "../../assets/ts-logo.svg";
import {Link, NavLink, Outlet} from "react-router-dom";

const Examples = () => {
  return (
    <>
      <section className="bg-custom-dark">
        <div className="py-5 container text-white">
          <div>
            <div className="text-center">
              <img className="Home-logo" src={reactLogo} alt="React-logo"/>
              <img className="Home-logo" src={tsLogo} alt="ts-logo"/>
            </div>
            <h1 className=" my-4 text-center fs-3">
              <span className="fw-bold d-block my-2">React &amp; Typescript</span>
              <span className="fw-light d-block fs-5">The technologies in action.</span>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <article className="custom-mw py-5">
            <h3 className="mb-5 text-center">Check out a few following examples</h3>
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="1">Hide&amp;Seek</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="2">Todo List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="3">Chat</NavLink>
              </li>
            </ul>
            <div className="bg-white">
              <Outlet/>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Examples;