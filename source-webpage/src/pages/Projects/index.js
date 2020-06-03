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

import backendImage from '../../assets/backend.png';

export default function Projects() {
  const [projects, setProjects] = useState({
    nodejs: [
      {
        name: 'FastFeet',
        description: 'Projeto para conclusão do bootcamp 10 da Rocketseat',
        github: 'https://github.com/lcassiol/nodejs-fastfeet',
        image: backendImage,
      },
      {
        name: 'Be the hero',
        description: 'Projeto desenvolvido na semana omni stack da Rocketseat',
        github: 'https://github.com/lcassiol/nodejs-be-the-hero',
        image: backendImage,
      },
    ],
    react: [
      {
        name: 'FastFeet',
        description: 'Projeto para conclusão do bootcamp 10 da Rocketseat',
        github: 'https://github.com/lcassiol/reactjs-fastfeet',
        image:
          'https://github.com/lcassiol/reactjs-fastfeet/blob/master/src/assets/screenshots/Deliveries.png?raw=true',
      },
      {
        name: 'Be the hero',
        description: 'Projeto desenvolvido na semana omni stack da Rocketseat',
        github: 'https://github.com/lcassiol/reactjs-be-the-hero',
        image:
          'https://raw.githubusercontent.com/lcassiol/reactjs-be-the-hero/master/src/assets/screeenshots/print1.png',
      },
    ],
    reactnative: [
      {
        name: 'FastFeet',
        description: 'Projeto para conclusão do bootcamp 10 da Rocketseat',
        github: 'https://github.com/lcassiol/RN-fastfeet',
        image:
          'https://github.com/lcassiol/RN-fastfeet/blob/master/src/assets/screenshots/Dashboardscreen.png?raw=true',
      },
      {
        name: 'Be the hero',
        description: 'Projeto desenvolvido na semana omni stack da Rocketseat',
        github: 'https://github.com/lcassiol/RN-be-the-hero',
        image:
          'https://raw.githubusercontent.com/lcassiol/RN-be-the-hero/master/assets/screenshots/incidentDetail.jpg',
      },
    ],
  });
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
