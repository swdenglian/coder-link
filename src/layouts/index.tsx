import React from 'react';
import styles from './styles/index.less';

export const Layout: React.FC<{}> = (props) => {
  const { children } = props;
  return (
    <div className={styles.page}>
      {/* <div className={styles.sidebar}></div> */}
      <div className={styles.main}>
        <div className={styles.head}>
          <span className={styles.icon}>&#xe602;</span>
          <span>程序箱</span>
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.foot}>
          <div className={styles.copyright}>Copyright © 2022 程序箱 Design by 无为小安</div>
        </div>
      </div>
    </div>
  );
};
