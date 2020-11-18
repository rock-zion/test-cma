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
  }

  .btn-toggle-view{
    margin-right: 16px;
  }
`;

export const UserStyle = styled.div`
  
`
