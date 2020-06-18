import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: #009999;
  padding: 0px 30px;
  padding-top: 20px;
  flex: 1;
  height: 64px;
  border: 1px solid #009980;
`;

export const Content = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  display: flex;

  nav {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;

export const HeaderButton = styled(NavLink)`
  font-weight: bold;
  font-size: 17px;
  color: #e1e1e1;
  transition: color 0.6s ease;
  text-decoration: none;
  padding-bottom: 12px;

  & + a {
    margin-left: 21px;
  }

  &.active {
    color: #fff;
    border-bottom: 1.7px solid #f0f0f0;
  }

  &:hover {
    color: #fff;
    border-bottom: 1.7px solid #fff;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
