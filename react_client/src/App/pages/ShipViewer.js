import React, { useState } from 'react';
// import RenderOnce from "../components/RenderOnce"
import MainNavbar from "../components/Navbar"
import AuthRedirect from "../components/AuthRedirect"

import "../static/css/nav.css";
import RenderOnce from '../components/RenderOnce';

const ShipViewer = (props) => {
	const [ user_st, setState_User ] = useState({ email: "" });
	const [ ships_st, setState_ships ] = useState([]);
	const [ curShip_st, setState_curShip ] = useState({
		  _id: ""
		, vesselName: "No ship"
		, imoNum: ""
		, serviceType: ""
		, technician: ""
		, iframe: ""
		, __v: 0
	});

	AuthRedirect(setState_User);

	RenderOnce(() => {
		fetch("/api/v1/ship/permit")
			.then(res => res.json())
			.then(ships => {
				setState_ships(ships);

				if (ships.length != 0)
					setState_curShip(ships[0]);
			})
			.catch(err => console.log(err));
	});

	const setSidebar = (show) => {
		if (show === true) {
			document.getElementById("sidebar").classList.add("active");
			document.getElementById("overlay").classList.add("active");

		} else {
			document.getElementById("sidebar").classList.remove("active");
			document.getElementById("overlay").classList.remove("active");
		}
	}

	return (
		<div>
			<MainNavbar activeKey="ship" email={user_st.email}></MainNavbar>
			<nav id="sidebar">
				<div id="dismiss" onClick={e => setSidebar(false)}>
					<i className="fas fa-arrow-left"></i>
				</div>

				<div className="sidebar-header">
					<h3>Digital Twin Marine</h3>
				</div>

				<ul className="list-group">
					<li className="list-group-item">Select Ship</li>
					{ships_st.map((ship, index) => {
						return (
							<button type="button" 
								className={"list-group-item list-group-item-action ml-4"
									 + (curShip_st._id === ships_st[index]._id ? " active" : "")}
								onClick={() => { setState_curShip(ships_st[index]); setSidebar(false); }}
							>{ship.vesselName}
							</button>
						);
					})}
				</ul>
			</nav>
			<div className="container">
				<h3><button type="button" id="sidebarCollapse" className="btn btn-info mr-2" onClick={e => setSidebar(true) }>
					<i className="fas fa-align-left"></i>
				</button><b> Project Details</b></h3>

				<h5><b>Vessel Name: {curShip_st.vesselName}</b></h5>
				
				<div className="container">
					<div className="row">
						<div className="col-xl-2 col-lg-2 col-sm-3" style={{color: "MediumTurquoise"}}>IMO Number</div>
						<div className="col-5">{curShip_st.imoNum}</div>
					</div>
					<div className="row">
						<div className="col-xl-2 col-lg-2 col-sm-3" style={{color: "MediumTurquoise"}}>Service Type</div>
						<div className="col-5">{curShip_st.serviceType}</div>
					</div>
					<div className="row">
						<div className="col-xl-2 col-lg-2 col-sm-3" style={{color: "MediumTurquoise"}}>Technician</div>
						<div className="col-5">{curShip_st.technician}</div>
					</div>
				</div>
		
				<div id="overlay"></div>

				<h3 id = "3D"><b>3D Model</b>
				<a className="btn btn-small" style={{border: "2px solid black", float: "right"}} href= "/">
					Feedback Form</a></h3>
				
				<div className="responsive" style={{width: "100%", height: "90vh"}}>
					<iframe src={curShip_st.iframe}></iframe>
				</div>
				
				<a className="btn btn-small" style={{border: "2px solid black", float: "right"}} href= "#">
					Fill browser window</a>
			</div>
		</div>
	);
};


export default ShipViewer;
