import React from 'react';
import styles from './NotFoundBlock.module.scss';
console.log(styles);

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>Not found!!!😭</span>
      </h1>
    </div>
  );
};
export default NotFoundBlock;
