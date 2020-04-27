import React from 'react';
import { Container, Content, HeaderButton } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <HeaderButton exact to="/">
            Inicio
          </HeaderButton>
          <HeaderButton to="/projects">Projetos</HeaderButton>
          <HeaderButton to="/curriculum">Quem sou</HeaderButton>
        </nav>
      </Content>
    </Container>
  );
}
