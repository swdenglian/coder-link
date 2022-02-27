import { URLCard } from '@/components/card';
import { URLCards } from '@/data/home';
import { Layout } from '@/layouts';
import styles from './index.less';

export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.main}>
        {URLCards.map((i) => {
          return (
            <div key={i.title} className={styles.item}>
              <URLCard {...i} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
