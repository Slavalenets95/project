import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import NewsPage from '../features/NewsStock/pages/NewsPage'
import StockPage from '../features/NewsStock/pages/StockPage'
import Header from 'src/components/Layout/Header'
import Footer from 'src/components/Layout/Footer'
import Container from '../components/Layout/Container'
import FeedbackPage from '../features/Feedback/pages/FeedbackPage/index'
import classes from './style.module.scss'

const App = () => {
  return (
    <div className={classes.wrap}>
      <Header />
      <div className={classes.content}>
        <Container className={classes.mainContainer}>
          <Switch>
            <Route path="/" exact>
              <div>Стартовая страница</div>
            </Route>

            <Route path="/news/:id">
              <NewsPage />
            </Route>

            <Route path="/stocks/:id">
              <StockPage />
            </Route>

            <Route path="/feedback">
              <FeedbackPage />
            </Route>

            <Route path="**">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default App
