import { getAllPostIds, getPostData } from "@/lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import postStyles from "../../styles/Post.module.css";

function Post({
  post,
}: {
  post: { title: string; date: string; id: string; contentHtml: string };
}) {
  return (
    <div className={postStyles.container}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className={postStyles.headingXl}>{post.title}</h1>
        <div>{post.date}</div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
      </article>
    </div>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);

  return {
    props: {
      post: postData,
    },
  };
};
