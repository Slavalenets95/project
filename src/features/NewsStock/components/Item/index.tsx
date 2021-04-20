import React, { FC } from 'react'

import Share from '../../../../components/Share'
import styles from './styles.module.scss'

interface Props {
  title: string
  fullText: string
  img?: string
  postingDate: string
}

const Item: FC<Props> = ({
  title, fullText, img, postingDate, 
}) => {
  const headerImg = img ? (
    <div className={styles.article__header}>
      <img
        className={styles.article__image}
        src={img}
        alt="Большое изображение"
      />
    </div>
  ) : null

  return (
    <article className={styles.article}>
      {headerImg}
      <div className={styles.article__mainWrapper}>
        <div className={styles.article__main}>
          <h1 className={styles.article__title}>{title}</h1>
          <div
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{
              __html: fullText,
            }}
          />
        </div>
        <div className={styles.article__footer}>
          <time className={styles.article__date}>{postingDate}</time>
          <Share />
        </div>
      </div>
    </article>
  )
}

export default Item
