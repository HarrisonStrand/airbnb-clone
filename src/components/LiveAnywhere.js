import React from 'react';

function LiveAnywhere() {
  return (
    <React.Fragment>
				<h3 style={{marginLeft: '45px'}}>Live Anywhere</h3>
				<div style={{marginLeft: '50px', marginRight: '50px', marginBottom: '50px'}} class="row">
					<div class="col-lg-3">
						<div style={{ height: '350px', border: '5px', borderColor: 'black', borderStyle: 'solid', borderRadius: '10px'}}><h4>Entire homes</h4>
						</div>
					</div>
					<div class="col-lg-3">
						<div style={{height: '350px', border: '5px', borderColor: 'black', borderStyle: 'solid', borderRadius: '10px'}}><h4>Cabins and cottages</h4>
						</div>
					</div>
					<div class="col-lg-3">
            <div style={{height: '350px', border: '5px', borderColor: 'black', borderStyle: 'solid', borderRadius: '10px'}}><h4>Unique stays</h4>
            </div>
					</div>
					<div class="col-lg-3">
            <div style={{height: '350px', border: '5px', borderColor: 'black', borderStyle: 'solid', borderRadius: '10px'}}><h4>Pets welcome</h4>
            </div>
					</div>
				</div>

    </React.Fragment>
  )
}

export default LiveAnywhere;