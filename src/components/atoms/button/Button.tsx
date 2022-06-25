import React from 'react'
import ButtonContainer from './Button.styles'
import { IButton } from './IButton'


const Button = ({label, type = 'button', onClick: clickHandler, className, theme, onMouseEnter, onMouseLeave, dataTip }: IButton) => {
  return (
    <ButtonContainer data-tip={dataTip} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${className} ${theme}`} type={type} onClick={clickHandler}>
        {label}
    </ButtonContainer>
  )
}

export default Button
