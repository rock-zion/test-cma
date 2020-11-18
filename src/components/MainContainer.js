import React from 'react'
import {MainContainerStyle} from '../style/components'

export const MainContainer = (props) => {
  return (
    <MainContainerStyle>
      {props.children}
    </MainContainerStyle>
  )
}

export default MainContainer