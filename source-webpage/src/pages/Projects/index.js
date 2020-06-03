import React, { useState } from 'react';

import {
  Container,
  Header,
  Title,
  TitleDescription,
  Filter,
  FilterButton,
  ProjectList,
  Project,
  ProjectTitle,
  Image,
  DetailsWrapper,
  DetailsTitle,
  DetailsText,
  Link,
} from './styles';

import projectsJSON from './projects';

export default function Projects() {
  const [projects, setProjects] = useState(projectsJSON);
  const [filter, setFilter] = useState('nodejs');

  return (
    <Container>
      <Header>
        <Title>Projetos Desenvolvidos</Title>
        <TitleDescription>
          Aqui estou listando alguns projetos que eu criei ou contribui.
        </TitleDescription>
      </Header>

      <Filter>
        <FilterButton
          active={filter === 'nodejs'}
          onClick={() => setFilter('nodejs')}
        >
          Node.js
        </FilterButton>
        <FilterButton
          active={filter === 'react'}
          onClick={() => setFilter('react')}
        >
          React
        </FilterButton>
        <FilterButton
          active={filter === 'reactnative'}
          onClick={() => setFilter('reactnative')}
        >
          React-native
        </FilterButton>
      </Filter>

      <ProjectList>
        {projects[filter].map((project) => (
          <Project>
            <ProjectTitle>> {project.name}</ProjectTitle>
            <Image reactnative={filter === 'reactnative'} src={project.image} />
            <div className="overlay">
              <DetailsWrapper>
                <DetailsTitle>{project.name}</DetailsTitle>
                <DetailsText>{project.description}</DetailsText>
                <Link href={project.github}>Veja no GitHub</Link>
              </DetailsWrapper>
            </div>
          </Project>
        ))}
      </ProjectList>
    </Container>
  );
}
