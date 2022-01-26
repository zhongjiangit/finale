import React from 'react'
import loading from 'common/svg/loading.svg'
import styles from 'styles/index.module.scss'

interface LProps {
  tip?: string;
}

const Loading: React.FC<LProps>  = (props) => {
  const { tip } = props;
  return(
    <div className={styles.loading}>
      <div className={styles.imgBox}>
        <img src={loading} alt="img" />
      </div>
      <div className={styles.loadingTip}>
        {tip}
      </div>
    </div>
  )
}

export default Loading;