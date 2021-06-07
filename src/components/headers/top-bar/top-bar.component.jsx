import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import "./top-bar.styles.scss";

export default function TopBar() {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<div className="latest-news flex-a-center">
					<FeatherIcon size="24" icon="volume" />
					Latest News
				</div>
				<a href="#" className="news flex-a-center">
					There was a cat in my house!!
				</a>
			</div>
			<div className="top-bar-right">
				<Link className="search flex-a-center">
					<input placeholder="Search..." type="text" className="search-box" />
					<FeatherIcon className="search-icon" size="18" icon="search" />
				</Link>
				<Link to="/my-account" className="account flex-a-center">
					<FeatherIcon size="18" icon="user" />
					Account
				</Link>
				<Link to="/confession" className="confession flex-a-center">
					Confession
				</Link>
				<Link to="/chill-mode" className="chill-mode flex-a-center">
					<FeatherIcon size="24" icon="toggle-left" />
				</Link>
				<Link to="/my-space" className="club-house flex-a-center">
					<FeatherIcon size="18" icon="home" />
					ClubHouse
				</Link>
			</div>
		</div>
	);
}
