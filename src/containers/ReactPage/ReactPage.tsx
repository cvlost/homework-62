import React from 'react';
import reactLogo from "../../assets/react-logo.svg";

const ReactPage = () => {
  return (
    <>
      <section className="bg-custom-dark">
        <div className="py-5 container text-white">
          <div>
            <div className="text-center">
              <img className="Home-logo" src={reactLogo} alt="React-logo"/>
            </div>
            <h1 className=" my-4 text-center fs-3">
              <span className="fw-bold d-block my-2">React</span>
              <span className="fw-light d-block fs-5">A JavaScript library for building user interfaces.</span>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <article className=" py-5">
            <div className="custom-mw">
              <h3 className="text-center mb-5">What does React provide us?</h3>
              <p className="mb-5">
                Created by Facebook and originally open sourced in 2013, React has become one of the most
                popular libraries in the frontend world today. React is easily extendable and can include
                features such as routing and state management patterns with libraries like Redux. React
                is minimal in its footprint but can be customized for almost any project.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={reactLogo}
                alt="React-logo"
                className="d-block mb-5"
                style={{height: '100px'}}
              />
            </div>
            <div className="row">
              <h3 className="text-center mb-5">Key features</h3>
              <div className="col">
                <h5 className="text-secondary mb-4 text-center">Declarative</h5>
                <p>
                  React makes it painless to create interactive UIs. Design simple views for each state
                  in your application, and React will efficiently update and render
                  just the right components when your data changes
                </p>
                <p>
                  Declarative views make your code more predictable and easier to debug.
                </p>
              </div>
              <div className="col">
                <h5 className="text-secondary mb-4 text-center">Component-Based</h5>
                <p>
                  Build encapsulated components that manage their own state, then compose them to make complex UIs.
                </p>
                <p>
                  Since component logic is written in JavaScript instead of templates, you can
                  easily pass rich data through your app and keep state out of the DOM.
                </p>
              </div>
              <div className="col">
                <h5 className="text-secondary mb-4 text-center">Learn Once, Write Anywhere</h5>
                <p>
                  We don’t make assumptions about the rest of your technology stack, so you can develop
                  new features in React without rewriting existing code.
                </p>
                <p>
                  React can also render on the server using Node and power mobile apps using React Native.
                </p>
              </div>
            </div>
          </article>
          <article className="text-center">
            <h3 className="text-center mb-4">Learn even more</h3>
            <p>
              Visit the official React web site to get started.
            </p>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              className="btn btn-primary btn-lg mb-5"
            >
              Get started
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default ReactPage;