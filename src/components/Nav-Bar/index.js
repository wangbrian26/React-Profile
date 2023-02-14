import * as React from "react";
import { Link } from "react-router-dom";

const pages = ["home", "about", "projects"];

function Navbar() {
  return (
    <header id="header">
      <nav id="nav">
        <ul>
          {pages.map((page) => (
            <li>
              <Link key={page} to={`/${page}`}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
