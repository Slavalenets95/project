import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Item from '../../components/Item'
import StockService, { StockDto } from '../../StockService'

import classes from './styles.module.scss'

interface Params {
  id: string
}

const StockPage: FC = () => {
  const { id } = useParams<Params>()
  const [stockData, setStockData] = useState<StockDto | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    StockService.get(id)
      .then((res) => {
        setStockData(res)
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
        setIsLoading(false)
      })
  }, [id])

  const stock = stockData ? (
    <Item
      title={stockData.stockTitle}
      fullText={stockData.stockText}
      postingDate={stockData.startDate}
      img={`${process.env.REACT_APP_UPLOADS_URL}/images/stocks/${stockData.stockImg}`}
    />
  ) : null

  return <section className={classes.stockPage}>{stock}</section>
}

export default StockPage
