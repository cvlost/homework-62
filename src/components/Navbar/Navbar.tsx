import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-custom-darker">
      <div className="container">
        <span className="navbar-brand code fw-bold text-react-primary" role="button">useReact()</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Main
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/react" className="nav-link">
                React
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/typescript" className="nav-link">
                Typescript
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/examples" className="nav-link">
                Examples
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;