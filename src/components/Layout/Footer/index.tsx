import React, { FC } from 'react'
import Container from '../Container'
import { useTranslation } from 'react-i18next'
import classes from './Footer.module.scss'
import { ReactComponent as Twitter } from '../../../assets/icons/twitter.svg'
import { ReactComponent as Youtube } from '../../../assets/icons/youtube.svg'
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg'
import { ReactComponent as VK } from '../../../assets/icons/vk.svg'

const Footer: FC = () => {
  const { t } = useTranslation()

  return (
    <footer className={classes.footer}>
      <Container>
        <h2 className={classes.footer__head}>Online Store</h2>
        <div className={classes.footer}>
          <div className={classes.footer__left}>
            <div className={`${classes.footer__nav} ${classes.nav}`}>
              <p className={classes.nav__title}>{t('companyTitle')}</p>
              <ul className={`${classes.nav__list} ${classes.list}`}>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('corporateSales')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('Feedback')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('Vacancies')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('News')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('salesRules')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('personalInformation')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('forPartners')}
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${classes.footer__nav} ${classes.nav}`}>
              <p className={classes.nav__title}>{t('forBuyersTitle')}</p>
              <ul className={`${classes.nav__list} ${classes.list}`}>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('bonusProgram')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('giftCards')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('checkingInvoicePayment')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('loans')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('delivery')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('serviceCentres')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('equipmentStatus')}
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${classes.footer__nav} ${classes.nav}`}>
              <p className={classes.nav__title}> {t('help')}</p>
              <ul className={`${classes.nav__list} ${classes.list}`}>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('howToPlaceAnOrder')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('paymentMethods')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('exchangeReturnGuarantee')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('informationForLegalEntities')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('orderStatuses')}
                  </a>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('knowledgeBase')}
                  </a>
                </li>
              </ul>
            </div>

            <div className={`${classes.footer__nav} ${classes.nav}`}>
              <p className={classes.nav__title}>{t('priceLists')}</p>
              <ul className={`${classes.nav__list} ${classes.list}`}>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    Microsoft Excel
                  </a>
                  <p>{t('updated')} 23.12.2020</p>
                </li>
                <li className={classes.list__item}>
                  <a href="/" className={classes.list__item_link}>
                    {t('zipArchive')}
                  </a>
                  <p>{t('updated')} 23.12.2020</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.footer__right}>
            <div className={`${classes.footer__contacts} ${classes.contacts}`}>
              <p className={classes.contacts__title}>{t('stayInTouch')}</p>
              <div className={`${classes.contacts__social} ${classes.social}`}>
                <a
                  href="/"
                  className={`${classes.social__link} ${classes.social__link_vk}`}
                >
                  <VK width="30" height="30" />
                </a>
                <a
                  href="/"
                  className={`${classes.social__link} ${classes.social__link_facebook}`}
                >
                  <Facebook width="30" height="30" />
                </a>
                <a
                  href="/"
                  className={`${classes.social__link} ${classes.social__link_twitter}`}
                >
                  <Twitter width="30" height="30" />
                </a>
                <a
                  href="/"
                  className={`${classes.social__link} ${classes.social__link_youtube}`}
                >
                  <Youtube width="30" height="30" />
                </a>
              </div>
              <a href="tel:+78007777777" className={classes.social__tel}>
                8-800-777-77-77
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
