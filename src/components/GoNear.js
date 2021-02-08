import React from "react";

function GoNear(){
	const GoNearStyles = {
		color: 'white',
    fontSize: '36px'
	}
  return (
    <React.Fragment>
      <div style={GoNearStyles} class="container">
        <h1 style={{fontSize: '100px', fontWeight: '700', letterSpacing: '5px', paddingBottom: '0px', lineHeight: '0.2'}}>Go</h1>
        <h1 style={{fontSize: '100px', fontWeight: '700', letterSpacing: '5px', paddingTop: '0px', lineHeight: '1.2'}}>Near</h1>
        <button style={{ fontSize: '16px', width: '200px', height: '35px', alignItems: 'center', textAlign: 'center', borderRadius: '10px'}}>Explore Nearby Stays</button>
      </div>
    </React.Fragment>
  );
}

export default GoNear;