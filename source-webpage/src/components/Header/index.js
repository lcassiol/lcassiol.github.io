import React from 'react';
import { Container, Content, HeaderButton } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <HeaderButton exact to="/">
            INICIO
          </HeaderButton>
          <HeaderButton to="/projects">PROJETOS</HeaderButton>
          <HeaderButton to="/curriculum">QUEM SOU</HeaderButton>
        </nav>
      </Content>
    </Container>
  );
}
