import { runSync } from "@mdx-js/mdx";
import { CH } from "../src/components";
import * as runtime from "react/jsx-runtime";
import { getCode, getContent, getFiles } from "../dev/files";
import Head from "next/head";
import PageFooter from "../src/footer";
import styles from "../styles/Home.module.css";
import articleStyles from "../styles/article.module.css";

export async function getStaticPaths() {
  const files = await getFiles();
  return {
    paths: files.map((file) => ({ params: { name: file } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const { name = "test" } = params;

  const files = await getFiles();
  const content = await getContent(name);
  const { code } = await getCode(content);
  return {
    props: {
      tests: files,
      code,
      current: name,
    },
  };
}

export default function Page({
  current,
  code,
}: {
  current: string;
  code: string;
  tests: string[];
}) {
  const { default: Content } = runSync(code, runtime);
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.right}></div>
      <div className={styles.left}></div>
      <div className={articleStyles["article-container"]}>
        <Head>
          <title>{current}</title>
        </Head>
        <Result Content={Content} />
      </div>
    </div>
  );
}

function Result({ Content }: { Content: React.FC<any> }) {
  return (
    <div className={articleStyles["article-box"]}>
      <Content components={{ CH }} />
      <PageFooter />
    </div>
  );
}
