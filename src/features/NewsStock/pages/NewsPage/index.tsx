import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Item from '../../components/Item'
import NewsService, { NewsDto } from '../../NewsService'

import classes from './styles.module.scss'

interface Params {
  id: string
}

const NewsPage: FC = () => {
  const { id } = useParams<Params>()
  const [newsData, setNewsData] = useState<NewsDto | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    NewsService.get(id)
      .then((res) => {
        setNewsData(res)
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
        setIsLoading(false)
      })
  }, [id])

  const news = newsData ? (
    <Item
      title={newsData.title}
      fullText={newsData.fullText}
      postingDate={newsData.postingDate}
    />
  ) : null

  return <section className={classes.newsPage}>{news}</section>
}

export default NewsPage
