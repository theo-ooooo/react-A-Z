import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Home({
  posts,
}: {
  posts: { id: string; title: string; date: string }[];
}) {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Kyungwon Kang</title>
      </Head>

      <section className={homeStyles.headingMd}>
        <p>[Kyungwon Kang Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts: allPostsData,
    },
  };
};
