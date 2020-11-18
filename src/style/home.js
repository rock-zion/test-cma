import styled from 'styled-components'
import logo from '../assets/x.png'

export const HomeStyle = styled.div `
  width: 100%;
  height: 100vh;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`