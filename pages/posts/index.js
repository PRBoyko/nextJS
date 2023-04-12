import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/Posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostPage({ posts }) {

    return <Fragment>
        <Head>
            <title >Posts</title>
        </Head>
        <AllPosts posts={posts} />
    </Fragment>

}

export async function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: { posts },
    }
}

export default AllPostPage;