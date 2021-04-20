import React, { FC, useState } from 'react'
import { message } from 'antd'
import cn from 'classnames'
import { ShareAltOutlined } from '@ant-design/icons'

import { Popover } from '../Popover'
import classes from './styles.module.scss'
import copy from '../../utils/copy'

interface Social {
  name: string
  shareLink: string
}

type Socials = Record<string, Social>

const socials: Socials = {
  vk: { name: 'Вконтакте', shareLink: 'https://vk.com/share.php?url=' },
  ok: { name: 'Одноклассники', shareLink: 'https://connect.ok.ru/offer?url=' },
  fb: {
    name: 'Facebook',
    shareLink: 'https://www.facebook.com/sharer/sharer.php?u=',
  },
  tw: { name: 'Twitter', shareLink: 'https://www.twitter.com/share?url=' },
}

const Share: FC = () => {
  const url = encodeURI(window.location.href)
  const [showShare, setShowShare] = useState(false)

  const copyUrl = () => {
    copy(url)
      .then(() => message.success('Скопировано'))
      .catch(() => message.error('Не удалось скопировать'))

    hideShare()
  }

  const onVisibleChange = (visible: React.SetStateAction<boolean>) => {
    setShowShare(visible)
  }

  const hideShare = () => {
    setShowShare(false)
  }

  const shareMenu = (
    <div className={classes.share}>
      <ul className={classes.share__list}>
        {Object.entries(socials).map(([key, value]) => {
          const socialClassName = classes[`share__link_${key}`]
          return (
            <li key={key} className={classes.share__listItem}>
              <a
                className={`${classes.share__link} ${socialClassName}`}
                href={`${value.shareLink}${url}`}
                onClick={hideShare}
                rel="noreferrer"
                target="_blank"
              >
                {value.name}
              </a>
            </li>
          )
        })}
        <li className={classes.share__listItem}>
          <button
            className={cn(classes.share__link, classes.share__link_copy)}
            onClick={copyUrl}
            type="button"
          >
            Скопировать ссылку
          </button>
        </li>
      </ul>
    </div>
  )

  return (
    <Popover
      placement="top"
      content={shareMenu}
      trigger="click"
      autoAdjustOverflow
      visible={showShare}
      onVisibleChange={onVisibleChange}
    >
      <ShareAltOutlined className={classes.shareIcon} />
    </Popover>
  )
}

export default Share
