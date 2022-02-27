import React from 'react';

import { Card } from '.';
import { Tag } from '../Tag';
import styles from './styles/url-card.less';
import { URLCardProps } from './types/url-card';

export const URLCard: React.FC<URLCardProps> = (props) => {
  const { title, icon, description, href, tags } = props;

  return (
    <div className={styles.urlCard}>
      <Card>
        <a href={href} className={styles.main} target="_blank">
          <div className={styles.content}>
            <img src={icon} />
            <div className={styles.info}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles.foot}>
            <div className={styles.tags}>
              {tags?.map((i) => (
                <div key={i} className={styles.tag}>
                  <Tag text={i} />
                </div>
              ))}
            </div>
            <div className={styles.right} >&#xe601;</div>
          </div>
        </a>
      </Card>
    </div>
  );
};
