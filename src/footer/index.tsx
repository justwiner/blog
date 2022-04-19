import Link from "next/link";
import styles from "../../styles/article.module.css";

export default function PageFooter() {
  return (
    <div className={styles["article-footer"]}>
      在
      <Link href="/">
        <a
          style={{
            textDecorationLine: "underline",
          }}
        >
          winerlu.com
        </a>
      </Link>
      查看更多文章
    </div>
  );
}
