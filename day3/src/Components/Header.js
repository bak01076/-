/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <ul>
      <li>
        <Link to="/">Prices</Link>
      </li>
      <li>
        <Link to="/coins">Coins</Link>
      </li>
      <li>
        <Link to="/exchanges">Exchanges</Link>
      </li>
    </ul>
  </header>
);
