import React from 'react';
import styles from './styles/tag.less';

export const Tag: React.FC<{ text: string }> = (props) => {
  const { text } = props;
  return (
    <a className={styles.tag}>
      <span>{text}</span>
    </a>
  );
};
