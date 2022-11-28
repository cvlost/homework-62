import React from 'react';
import reactLogo from "../../assets/react-logo.svg";
import tsLogo from "../../assets/ts-logo.svg";
import './Home.css';

const Home = () => {
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
              <span className="fw-light d-block fs-5">Build powerful and robust apps using modern technologies.</span>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <article className="custom-mw py-5">
            <h2 className="my-4">What is React?</h2>
            <p>
              Created by Facebook and originally open sourced in 2013, React has become one of the most popular
              libraries in the frontend world today. React is easily extendable and can include features
              such as routing and state management patterns with libraries like Redux. React is minimal
              in its footprint but can be customized for almost any project.
            </p>
            <p>
              For more about React at a high level, check out the official&nbsp;
              <a
                className="link-primary"
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank" rel="noreferrer">React  documentation</a>.
            </p>
            <h2 className="my-4">What is TypeScript?</h2>
            <p>
              <a href="https://www.typescriptlang.org/"
                 target="_blank" rel="noreferrer"
                 className="link-primary">TypeScript</a> is
              a free, open source programming language developed and maintained by Microsoft.
              It is a strict superset of JavaScript that adds optional static typing and class-based,
              object-oriented programming to the language.
            </p>
            <h3 className="my-4">A superset of JavaScript</h3>
            <p>
              JavaScript was initially created as a client-side language, but over time, developers understood
              that JavaScript could be used on the server, especially with the invention of the v8 engine.
            </p>
            <p>
              JavaScript can quickly become complex and sometimes can’t live up to the full potential of an
              object-oriented programming language. TypeScript was born to bridge this gap and to become an
              alternative for enterprise-level development.
            </p>
            <p>
              TypeScript emits JavaScript when compiled and is a popular name in the JavaScript world today.
              Even pure JavaScript applications ship a type.d.ts type definition for TypeScript developers.
            </p>
            <h2 className="my-4">Is React better with TypeScript?</h2>
            <p>
              TypeScript can be helpful to React developers in many ways. Below are
              just a few benefits of using TypeScript in React:
            </p>
            <ul>
              <li>Variable and bug checks</li>
              <li>Readable, easily understandable code</li>
              <li>Interfaces</li>
              <li>Better support for JSX</li>
              <li>IDE support</li>
              <li>Support for existing React projects</li>
              <li>Community</li>
            </ul>

          </article>
        </div>
      </section>
    </>
  );
};

export default Home;