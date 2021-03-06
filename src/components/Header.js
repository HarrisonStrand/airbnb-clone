import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderLogin from "./HeaderLogin";
import HeaderNavBar from "./HeaderNavBar";
import GoNear from "./GoNear";

function Header(){
  return (
    <React.Fragment>
      <div style={{height: '850px'}} id="headerBG">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <HeaderLogo />
            </div>
            <div class="col-lg-6">
              <HeaderNavBar />
            </div>
            <div class="col-lg-3">
              <HeaderLogin />
            </div>
          </div>
          <GoNear />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;