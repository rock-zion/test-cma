import styled from 'styled-components'
import logo from '../assets/x.png'
import * as color from './color.json'

export const HomeStyle = styled.div `
  padding: 64px;
  width: 100%;
  height: auto;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  .users-container{
    min-height: 400px;
    max-height: 600px;

    overflow: hidden;
    overflow-y: scroll;
    display: grid;
  }

  .users-container-list {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }

  .users-container-grid {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 24px;
    column-gap: 24px;
  }

  .details{
    display: flex;
    .avatar-container{
      margin-right: 9.32px;
    }
  }

  .details-grid{
    width: 100%;
    margin-bottom: 16px;
  }

  .id-number{
    font-weight: 500;
    color: ${color.blue};
    font-size: 12px;
  }

  .user{
    padding: 0 16px;
    width: 100%;
    min-height: 76px;
    max-height: auto;
    border: 1px solid ${color.white};
    border-radius: 8px;
    display: flex;
  }

  .user-list{
    justify-content: space-between;
    align-items: center;
  }

  .user-grid{
    flex-direction: column;
    justify-content: center;
    padding: 24px 16px
  }

  .avatar-container{
    height: 50px;
    width: 50px;
    border-radius: 100%;
    overflow: hidden;

    img{
      width: 100%;
      height: 100%;
    }
  }
`