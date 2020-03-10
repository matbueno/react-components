import React from "react";
import classnames from "classnames";

import styles from "./styles.module.css";

const Loading = ({ className }) => (
  <div className={classnames(className, styles.loaderInner)}>
    <div className={styles.loaderLineWrap}>
      <div className={styles.loaderLine} />
    </div>
    <div className={styles.loaderLineWrap}>
      <div className={styles.loaderLine} />
    </div>
    <div className={styles.loaderLineWrap}>
      <div className={styles.loaderLine} />
    </div>
    <div className={styles.loaderLineWrap}>
      <div className={styles.loaderLine} />
    </div>
    <div className={styles.loaderLineWrap}>
      <div className={styles.loaderLine} />
    </div>
  </div>
);

export default Loading;
