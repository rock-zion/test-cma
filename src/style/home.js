import styled from 'styled-components';
import logo from '../assets/x.png';

export const HomeStyle = styled.div`
  padding: 64px;
  width: 100%;
  height: auto;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  .users-container {
    min-height: 400px;
    max-height: 600px;
    width: 100%;

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

  @media only screen and (max-width: 600px) {
    height: 100vh;
    padding: 16px;

    .users-container-list {
      grid-template-columns: 1fr;
      row-gap: 16px;
      column-gap: 24px;
    }
  }
`;
