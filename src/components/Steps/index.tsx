import React, { FC } from 'react'
import { Steps as StepsAntd } from 'antd'
import {
  StepsProps as StepsAntdProps,
  StepProps as StepAntdProps,
} from 'antd/lib/steps'

const { Step: StepAntd } = StepsAntd

export interface StepsProps extends StepsAntdProps {}

export interface StepProps extends StepAntdProps {}

type StepsType<T, U> = FC<T> & {
  Step: FC<U>
}

const Steps: StepsType<StepsProps, StepProps> = ({ children, ...props }) => {
  return <StepsAntd {...props}>{children}</StepsAntd>
}

Steps.Step = (props) => <StepAntd {...props} />

export default Steps
