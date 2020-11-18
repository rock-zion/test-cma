import styled from 'styled-components';
import * as color from './color.json';

export const MainContainerStyle = styled.div`
  min-width: 987px;
  max-width: 987px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 24px;
  min-height: 600px;
  max-height: auto;

  border: 1px solid ${color.white};
  border-radius: 1rem;
  backdrop-filter: blur(10px);

  .top-bar {
    display: flex;
    align-items: center;
    padding: 11px 16px;
    height: 60px;
    width: 100%;
    background: ${color.white};
    box-shadow: 0px 12px 34px rgba(0, 0, 0, 0.03);
    border-radius: 12px;
    margin-bottom: 40px;
  }

  .btn-toggle-view {
    margin-right: 16px;
  }

  @media only screen and (max-width: 600px) {
    min-width: 100%;
    max-width: 100%;

    min-height: auto;
    padding: 8px;

    .top-bar {
      display: none;
    }
  }
`;

export const UserStyle = styled.span`
  .user {
    padding: 0 16px;
    width: 100%;
    min-height: 76px;
    max-height: auto;
    border: 1px solid ${color.white};
    border-radius: 8px;
    display: flex;
  }

  .user-list {
    justify-content: space-between;
    align-items: center;
  }

  .user-grid {
    flex-direction: column;
    justify-content: center;
    padding: 24px 16px;
  }

  .id-number {
    font-weight: 500;
    color: ${color.blue};
    font-size: 12px;
  }

  .details {
    display: flex;
    .avatar-container {
      margin-right: 9.32px;
    }
  }

  .details-grid {
    width: 100%;
    margin-bottom: 16px;
  }

  .avatar-container {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    height: auto;

    .user-list {
      flex-direction: column;
      padding: 24px 16px;
      align-items: flex-start;
    }

    .details-list {
      width: 100%;
      margin-bottom: 16px;
    }

    .btn-m-100{
      width: 100%;
    }

  }
`;
