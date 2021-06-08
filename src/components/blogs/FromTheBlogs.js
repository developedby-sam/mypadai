import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import "./FromTheBlogs.scss";

import { Subheading } from "components/misc/Headings.js";

const FromTheBlogContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f3f4f6;
	padding: 4rem;
`;

const FromTheBlogContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: #f3f4f6;
	flex-wrap: wrap;
	row-gap: 3rem;
	column-gap: 3rem;
`;

const FromTheBlogCard = styled.div`
	background-color: #f9fafb;
	display: flex;
	border-radius: 3px;
	overflow: hidden;
	flex: 0 0 40rem;
	cursor: pointer;
	transition: all 300ms ease;

	&:hover {
		box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
	}
`;

const FromTheBlogCardDateAndImageContainer = styled.div`
	display: flex;
`;

const FromTheBlogCardDate = styled.div`
	text-align: center;
	color: #374151;
	background-color: #f9fafb;
	padding: 1.5rem 1rem;
	font-size: 1.4rem;
	font-weight: 600;
`;
const FromTheBlogCardImage = styled.div`
	background-image: url("https://tinyurl.com/xx6udn45");
	width: 10rem;
	height: 100%;
	background-position: center;
	background-size: cover;
`;
const FromTheBlogCardText = styled.div`
	color: #4b5563;
	padding: 0.3rem 1rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default function FromTheBlog() {
	return (
		<FromTheBlogContainer>
			<Subheading className="sub-heading">From the blogs</Subheading>
			<FromTheBlogContent>
				<FromTheBlogCard>
					<FromTheBlogCardDateAndImageContainer>
						<FromTheBlogCardDate>
							12 <br /> Jun
						</FromTheBlogCardDate>
						<FromTheBlogCardImage />
					</FromTheBlogCardDateAndImageContainer>
					<FromTheBlogCardText>
						<p>This is a bunch of crap</p>
						<p>developedby-sam</p>
					</FromTheBlogCardText>
				</FromTheBlogCard>

				<FromTheBlogCard>
					<FromTheBlogCardDateAndImageContainer>
						<FromTheBlogCardDate>
							12 <br /> Jun
						</FromTheBlogCardDate>
						<FromTheBlogCardImage />
					</FromTheBlogCardDateAndImageContainer>
					<FromTheBlogCardText>
						<p>This is a bunch of crap</p>
						<p>developedby-sam</p>
					</FromTheBlogCardText>
				</FromTheBlogCard>

				<FromTheBlogCard>
					<FromTheBlogCardDateAndImageContainer>
						<FromTheBlogCardDate>
							12 <br /> Jun
						</FromTheBlogCardDate>
						<FromTheBlogCardImage />
					</FromTheBlogCardDateAndImageContainer>
					<FromTheBlogCardText>
						<p>This is a bunch of crap</p>
						<p>developedby-sam</p>
					</FromTheBlogCardText>
				</FromTheBlogCard>

				<FromTheBlogCard>
					<FromTheBlogCardDateAndImageContainer>
						<FromTheBlogCardDate>
							12 <br /> Jun
						</FromTheBlogCardDate>
						<FromTheBlogCardImage />
					</FromTheBlogCardDateAndImageContainer>
					<FromTheBlogCardText>
						<p>This is a bunch of crap</p>
						<p>developedby-sam</p>
					</FromTheBlogCardText>
				</FromTheBlogCard>
			</FromTheBlogContent>
		</FromTheBlogContainer>
	);
}
