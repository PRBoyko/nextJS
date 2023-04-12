import PostContent from "../../components/Posts/PostDetail/PostContent";
import { getFiles, getPostData } from "../../lib/posts-util";

function PostDetailsPage({ detailInfo }) {
   return <PostContent detailInfo={detailInfo} />
}

export async function getStaticProps(context) {
   const { params } = context;
   const detailInfo = getPostData(params.slug);

   return {
      props: { detailInfo },
      revalidate: 600
   }
}


export async function getStaticPaths(context) {

  const files =  getFiles();
   console.log(files)
   const slugs = files.map(file=> file.replace(/.md$/, ''));
   console.log(slugs);

   return {
      paths: slugs.map((slug)=>({params:{slug:slug}})),
      fallback: 'blocking',
   }
}

export default PostDetailsPage;