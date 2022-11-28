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
            <div className="row">
              <div className="col">
                <h2 className="fs-4">JavaScript and More</h2>
                <p>
                  TypeScript adds additional syntax to JavaScript to support a tighter
                  integration with your editor. Catch errors early in your editor.
                </p>
              </div>
              <div className="col">
                <h2 className="fs-4">A Result You Can Trust</h2>
                <p>
                  TypeScript code converts to JavaScript, which runs anywhere JavaScript runs:
                  In a browser, on Node.js or Deno and in your apps.
                </p>
              </div>
              <div className="col">
                <h2 className="fs-4">Safety at Scale</h2>
                <p>
                  TypeScript understands JavaScript and uses type inference to
                  give you great tooling without additional code.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default TsPage;