import React from 'react'
import Container from './FieldLayout.styles'
import { IFieldLayout } from './IFieldLayout'

const FieldLayout = ({ label, className = '', children }: IFieldLayout ) => {
  return (
    <Container className={className}>
      <label>
        <span className="label-text">{label}</span>
        <div className="input-wrapper">
          {children}
        </div>
      </label>
    </Container>
  )
}

export default FieldLayout