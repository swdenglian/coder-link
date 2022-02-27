import React from 'react';
import styles from './styles/card.less';
import classnames from 'classnames';

export const Card: React.FC<{ className?: string }> = (props) => {
  const { children, className } = props;
  return <div className={classnames([styles.card, className])}>{children}</div>;
};
