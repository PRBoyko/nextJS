import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <meta name="description" content="blog"></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const posts = getFeaturedPosts();
  return {
    props: { posts },
  }
}

export default HomePage;