import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import FromTheBlog from "components/blogs/FromTheBlogs.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import StudentGuides from "components/student-guides/StudentGuides.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import HeaderHero from "../components/hero/header-hero/HeaderHero.js";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <HeaderHero />
      <StudentGuides />
      <TabGrid
        heading={
          <p className="discover-colleges-heading">
            Discover your dream college.
          </p>
        }
      />
      <Blog />
      <FromTheBlog />
      <FAQ />
      <SubscribeNewsLetterForm />
      <Footer />
    </AnimationRevealPage>
  );
};
