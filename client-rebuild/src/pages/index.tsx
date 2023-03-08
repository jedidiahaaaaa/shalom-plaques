import { type NextPage } from "next";
import Head from "next/head";
import MetaTag from "~/components/common/meta.common";

const Home: NextPage = () => {
  return (
    <>
      <MetaTag />
      <div>Content</div>
    </>
  );
};

export default Home;
