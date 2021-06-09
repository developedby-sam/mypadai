import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings";
import "./BlogPosts.scss";

const Heading = tw(SectionHeading)`text-gray-700 py-20`;

const blogPosts = [
	{
		imageSrc: "https://tinyurl.com/nd4rxxw4",
		heading: "Heading of the blog post",
		content:
			"Content of the blog post. Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors",
		author: "developedby-sam",
	},
	{
		imageSrc: "https://tinyurl.com/yw8dznc7",
		heading: "Heading of the blog post",
		content:
			"Content of the blog post. Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors",
		author: "developedby-sam",
	},
	{
		imageSrc: "https://tinyurl.com/6mzkez5f",
		heading: "Heading of the blog post",
		content:
			"Content of the blog post. Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors",
		author: "developedby-sam",
	},
	{
		imageSrc: "https://tinyurl.com/s7re26yp",
		heading: "Heading of the blog post",
		content:
			"Content of the blog post. Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors",
		author: "developedby-sam",
	},
	{
		imageSrc: "https://tinyurl.com/56steszd",
		heading: "Heading of the blog post",
		content:
			"Content of the blog post. Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors Lorem ipsum dolor sit conesctetor Lorem ipsum dolor sit conesctetors",
		author: "developedby-sam",
	},
];

export default function BlogPosts() {
	return (
		<div className="container">
			<Heading>BLog Posts</Heading>
			<div className="post-container">
				{blogPosts.map((post, index) => (
					<div className="blog-post" key={index}>
						<div
							className="blog-post-image"
							style={{ backgroundImage: `url(${post.imageSrc})` }}
						/>
						<div className="blog-post-texts">
							<div className="blog-post-heading">{post.heading}</div>
							<div className="blog-post-content">
								{post.content} <br />
								<a href="#" className="read-more">
									Read More
								</a>
							</div>
							<div className="blog-post-author">
								<span>by</span>
								{post.author}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
