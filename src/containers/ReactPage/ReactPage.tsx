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
            <div className="row">
              <div className="col">
                <h2 className="fs-4">Declarative</h2>
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
                <h2 className="fs-4">Component-Based</h2>
                <p>
                  Build encapsulated components that manage their own state, then compose them to make complex UIs.
                </p>
                <p>
                  Since component logic is written in JavaScript instead of templates, you can
                  easily pass rich data through your app and keep state out of the DOM.
                </p>
              </div>
              <div className="col">
                <h2 className="fs-4">Learn Once, Write Anywhere</h2>
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
        </div>
      </section>
    </>
  );
};

export default ReactPage;