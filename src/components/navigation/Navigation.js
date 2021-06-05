import React from "react";

import "./Navigation.scss";

import TopBar from "../headers/top-bar/top-bar.component";
import SiteHeader from "../headers/site-header/site-header.component";

export default function Navigation() {
	return (
		<div className="navigation-container">
			<TopBar />
			<SiteHeader />
		</div>
	);
}
