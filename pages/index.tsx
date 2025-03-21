import Head from "next/head";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyungwon Kang</title>
      </Head>

      <section className={homeStyles.headingMd}>
        <p>[Kyungwon Kang Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  );
}
