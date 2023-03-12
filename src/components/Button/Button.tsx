import React, { ButtonHTMLAttributes } from 'react'
import StyledWrapper from './Button,styled'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {}

const Button: React.FC<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Button
