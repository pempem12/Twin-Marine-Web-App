import React, { useState } from 'react';
// import RenderOnce from "../components/RenderOnce"
import MainNavbar from "../components/Navbar"
import AuthRedirect from "../components/AuthRedirect"

import "../static/css/nav.css";

const ShipViewer = (props) => {
	const [ user_st, setState_User ] = useState({ email: "" });

	AuthRedirect(setState_User);

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

				<ul className="list-unstyled components">
					<li>
						<a href="/" data-toggle="collapse"  aria-expanded="false">Select Ship<i className="fas fa-angle-down rotate-icon"></i></a>
						<ul className="collapse list-unstyled" id="pageSubmenu">
							<li>
								<a href="/">Ship 1</a>
							</li>
							<li>
								<a href="/">Ship 2</a>
							</li>
							<li>
								<a href="/">Ship 3</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>

			<h3><button type="button" id="sidebarCollapse" className="btn btn-info mr-2" onClick={e => setSidebar(true) }>
				<i className="fas fa-align-left"></i>
			</button><b> Project Details</b></h3>

			<h5><b>Vessel Name: Sample Vessel</b></h5>
			
			<div className="container">
				<div className="row">
					<div className="col-xl-2 col-lg-2 col-sm-3" style={{color: "MediumTurquoise"}}>IMO Number</div>
					<div className="col-5">8888888</div>
				</div>
				<div className="row">
					<div className="col-xl-2 col-lg-2 col-sm-3" style={{color: "MediumTurquoise"}}>Service Type</div>
					<div className="col-5">Construction</div>
				</div>
				<div className="row">
					<div className="col-xl-2 col-lg-2 col-sm-3" style={{color: "MediumTurquoise"}}>Technician</div>
					<div className="col-5">Tom Bruger</div>
				</div>
			</div>
	
    		<div id="overlay"></div>

			<h3 id = "3D"><b>3D Model</b>
			<a className="btn btn-small" style={{border: "2px solid black", float: "right"}} href= "/">
				Feedback Form</a></h3>
			
			<div className="responsive" style={{width: "100%", height: "90vh"}}>
				<iframe src="https://www.3dvieweronline.com/members/Id9bf31c7ff062936a96d3c8bd1f8f2ff3/JBM3mWHh2jveQW4"></iframe>
			</div>
			
			<a className="btn btn-small" style={{border: "2px solid black", float: "right"}} href= "#">
				Fill browser window</a>
		</div>
	);
};


export default ShipViewer;
