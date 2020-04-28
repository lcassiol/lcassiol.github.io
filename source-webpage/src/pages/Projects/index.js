import React from 'react';

import {
  Container,
  Header,
  Title,
  TitleDescription,
  ProjectList,
  Project,
  ProjectImage,
  ProjectDescription,
  LinkDetails,
} from './styles';

export default function Projects() {
  return (
    <Container>
      <Header>
        <Title>Projetos Desenvolvidos</Title>
        <TitleDescription>
          Aqui estou listando alguns projetos que eu criei ou contribui.
        </TitleDescription>
      </Header>
      <ProjectList>
        <Project>
          <ProjectImage />
          <ProjectDescription></ProjectDescription>
          <LinkDetails />
        </Project>
      </ProjectList>
    </Container>
  );
}
