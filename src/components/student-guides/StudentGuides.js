import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro";

import { SectionHeading } from "components/misc/Headings.js";

const Header = tw(SectionHeading)`pb-16`;

const StudentGuidesContainer = styled.div`
	background-color: #f3f4f6;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 7rem;
`;

const StudentGuidesContent = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 2rem;
`;

const StudentGuideCard = styled.div`
	min-width: 20rem;
	background-color: #f9fafb;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 5px;
	overflow: hidden;
	transition: all 100ms ease;

	&:hover {
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
	}
`;

const StudentGuideText = styled.h2`
	color: black;
	text-align: center;
	font-size: 1.5rem;
	font-weight: 500;
	padding: 1rem 3rem;
`;

const StudentGuideImg = styled.div`
	background-image: url("https://tinyurl.com/7rtpkshk");
	width: 100%;
	height: 15rem;
	background-position: center;
	background-size: cover;
`;

const StudentGuideButton = styled.button`
	width: 100%;
	background-color: #059669;
	color: #f9fafb;
	padding: 1rem 2rem;
	transition: all 300ms ease;
	&:hover {
		background-color: #10b981;
	}
`;

export default function StudentGuides() {
	return (
		<StudentGuidesContainer>
			<Header>Full guide for graduated students</Header>
			<StudentGuidesContent>
				<StudentGuideCard>
					<StudentGuideText>Completed School ?</StudentGuideText>
					<StudentGuideImg />
					<StudentGuideButton>Now what ?</StudentGuideButton>
				</StudentGuideCard>
				<StudentGuideCard>
					<StudentGuideText>Completed High School ?</StudentGuideText>
					<StudentGuideImg />
					<StudentGuideButton>Now what ?</StudentGuideButton>
				</StudentGuideCard>
				<StudentGuideCard>
					<StudentGuideText>Completed Bachelors ?</StudentGuideText>
					<StudentGuideImg />
					<StudentGuideButton>Now what ?</StudentGuideButton>
				</StudentGuideCard>
			</StudentGuidesContent>
		</StudentGuidesContainer>
	);
}
