import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'
import Input from '../../Input'
import Button from '../../Button'
import 'antd/dist/antd.css'
import Container from '../Container'
import { useTranslation } from 'react-i18next'
import AuthModal from '../../../features/Auth/components/AuthModal'
import { useSelector } from 'react-redux'
import { authSelectors, deauthorize } from '../../../features/Auth/authSlice'
import useAppDispatch from '../../../hooks/useAppDispatch'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const { Search } = Input
  const { t } = useTranslation()

  const [isAuthModalShown, setIsAuthModalShown] = useState(false)
  const isAuthorized = !!useSelector(authSelectors.getToken)

  const onSearch = (value: string) => {
    console.log(value)
  }

  return (
    <header style={{ background: '#fff' }}>
      <Container>
        <div className={classes.header}>
          <Link to="/">
            <h5 className={classes.header__logo}>Online Store</h5>
          </Link>
          <Search
            enterButton
            placeholder={t('siteSearchPlaceholder')}
            className={classes.header__search}
            onSearch={onSearch}
          />
          <div>
            <Button
              type="primary"
              shape="round"
              size="large"
              className={classes.header__btn_registration}
            >
              {t('signUp')}
            </Button>
            <Button
              className={classes.header__btn_login}
              size="large"
              shape="round"
              onClick={() => {
                if (!isAuthorized) {
                  setIsAuthModalShown(true)
                  return
                }

                dispatch(deauthorize())
              }}
            >
              {!isAuthorized ? t('signIn') : t('signOut')}
            </Button>
          </div>
        </div>
      </Container>

      <AuthModal
        show={isAuthModalShown}
        close={() => setIsAuthModalShown(false)}
      />
    </header>
  )
}

export default Header
