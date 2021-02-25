import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>FE Quizzes</title>
      </Head>
      <Layout>
        <div>Hello interviewees..!</div>
      </Layout>
    </>
  );
}
