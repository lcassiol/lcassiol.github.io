import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: #009999;
  padding: 20px 30px;
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
  font-size: 18px;
  color: #e8e8e8;
  transition: color 0.3s;
  text-decoration: none;

  & + a {
    margin-left: 21px;
  }

  &.active {
    color: #fff;
    font-size: 25px;
  }

  &:hover {
    color: #fff;
  }
`;
