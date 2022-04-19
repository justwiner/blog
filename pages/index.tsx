import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import { articleList, userInfo } from "../mock/const";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{userInfo.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.left}>
        <div className={styles["avator-container"]}>
          <Image
            className={styles.avator}
            width={150}
            height={150}
            src={userInfo.avator}
            alt="头像"
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles["title-container"]}>
          <div className={styles.title}>{userInfo.title}</div>
          <div className={styles.subTitle}>{userInfo.subTitle}</div>
        </div>
        <div className={styles["article-content"]}>
          {articleList?.map((item, index) => (
            <div key={index} className={styles["article-item"]}>
              <div className={styles["article-item-date"]}>
                <div className={styles["article-type"]}>{item.type}</div>
                <div>{item.date}</div>
              </div>
              <div className={styles["article-item-info"]}>
                <div className={styles["article-item-title"]}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </div>
                <div className={styles["article-item-desc"]}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
