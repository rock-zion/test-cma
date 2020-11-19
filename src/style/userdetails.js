import styled from 'styled-components';
import logo from '../assets/x.png';
import * as color from './color.json';

export const UserDetailStyle = styled.div`
  padding: 64px;
  width: 100%;
  height: auto;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  .container {
    /* min-width: 987px; */
    max-width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 24px;
    min-height: 600px;
    max-height: auto;

    border: 1px solid ${color.white};
    border-radius: 1rem;
    backdrop-filter: blur(10px);

    display: grid;
    grid-template-columns: 1fr minmax(200px, 2fr);;
    column-gap: 40px;

  }

  @media only screen and (max-width: 600px) {
    height: 100vh;
    padding: 16px;

    .container{
      height: fit-content;
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
`;
