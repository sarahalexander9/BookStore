import React from "react";

const Navbar = () => {
  const moment = require("moment");
  let now = moment("20230101", "YYYYMMDD").fromNow();
  console.log(now);
  return (
    // eslint-disable-next-line 
    <nav>
    {/* eslint-disable-next-line  */}
      <a href="Main.html"></a>
      <div className="nav-links">
        <ul>
          <p></p>
          <li>
            <a href="Main.jsx">Countdown to 2023: {now}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;