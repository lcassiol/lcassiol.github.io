import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 34px 120px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 30px 13px;
  }
`;
