import React from 'react'
import styles from './Sidebar.module.scss'
import { ReactComponent as Appliances } from '../../../assets/icons/Appliances.svg'

interface Props {
  children: React.ReactChild
}

const Sidebar: React.FC<Props> = (props: Props) => {
  const { children } = props
  return <div className={styles.sidebar}>{children}</div>
}

export default Sidebar
