import React from "react";
import { Link } from "react-router-dom";
import "./site-header.styles.scss";

import logo from "../../../images/logo.png";

export default function SiteHeader() {
	return (
		<div className="site-header">
			<Link to="/">
				<img src={logo} alt="logo" className="logo" />
			</Link>
			<div className="site-navigation">
				<Link to="/" className="nav-link">
					HOME
				</Link>
				<Link to="/about-us" className="nav-link">
					ABOUT US
				</Link>
				<Link to="/discover" className="nav-link">
					DISCOVER
				</Link>
				<Link to="/study-abroad" className="nav-link">
					STUDY ABROAD
				</Link>
				<Link to="/edu-park" className="nav-link">
					EDUPARK
				</Link>
				<Link to="/opportunities" className="nav-link">
					OPPORTUNITIES
				</Link>
				<Link to="/blogs" className="nav-link">
					BLOGS
				</Link>
				<Link to="/share-books" className="nav-link">
					SHARE BOOKS
				</Link>
			</div>
		</div>
	);
}
