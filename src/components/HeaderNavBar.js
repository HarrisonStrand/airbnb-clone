import React from "react";

function HeaderNavBar(){
  return (
    <React.Fragment>
				<p style={{marginTop: '50px', textAlign: 'center'}}>Places to stay | |  Experiences | | Online Experiences</p>
				<input type="text" placeholder="Start your search" style={{ width: '550px', height: '50px', alignItems: 'center', textAlign: 'right', padding: '10px', borderRadius: '25px'}}></input>
    </React.Fragment>
  );
}

export default HeaderNavBar;