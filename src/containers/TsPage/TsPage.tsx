import React from 'react';
import tsLogo from "../../assets/ts-logo.svg";

const TsPage = () => {
  return (
    <>
      <section className="bg-custom-dark">
        <div className="py-5 container text-white">
          <div>
            <div className="text-center">
              <img className="Home-logo" src={tsLogo} alt="React-logo"/>
            </div>
            <h1 className=" my-4 text-center fs-3">
              <span className="fw-bold d-block my-2">Typescript</span>
              <span className="fw-light d-block fs-5">JavaScript with syntax for types.</span>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <article className=" py-5">
            <div className="custom-mw">
              <h3 className="text-center mb-5">Typing &#60;Type&#62;</h3>
              <p className="mb-5">
                TypeScript is a free, open source programming language developed and
                maintained by Microsoft. It is a strict superset of JavaScript that adds optional static
                typing and class-based, object-oriented programming to the language.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={tsLogo}
                alt="React-logo"
                className="d-block mb-5"
                style={{height: '100px'}}
              />
            </div>
            <div className="row">
              <h3 className="text-center mb-5">Key features</h3>
              <div className="col">
                <h5 className="text-secondary mb-4 text-center">JavaScript and More</h5>
                <p>
                  TypeScript adds additional syntax to JavaScript to support a tighter
                  integration with your editor. Catch errors early in your editor.
                </p>
              </div>
              <div className="col">
                <h5 className="text-secondary mb-4 text-center">A Result You Can Trust</h5>
                <p>
                  TypeScript code converts to JavaScript, which runs anywhere JavaScript runs:
                  In a browser, on Node.js or Deno and in your apps.
                </p>
              </div>
              <div className="col">
                <h5 className="text-secondary mb-4 text-center">Safety at Scale</h5>
                <p>
                  TypeScript understands JavaScript and uses type inference to
                  give you great tooling without additional code.
                </p>
              </div>
            </div>
          </article>
          <article className="text-center">
            <h3 className="text-center mb-4">Learn even more</h3>
            <p>
              Visit the official Typescript web site to get started.
            </p>
            <a
              href="https://www.typescriptlang.org/docs/"
              target="_blank"
              rel="noreferrer"
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

export default TsPage;