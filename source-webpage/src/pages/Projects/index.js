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

export default function Projects() {
  const [projects, setProjects] = useState({
    nodejs: [
      {
        name: 'FastFeet',
        description: 'Projeto para conclusão do bootcamp 10 da Rocketseat',
        github: 'https://github.com/lcassiol/nodejs-fastfeet',
        image: 'https://miro.medium.com/max/730/1*Jr3NFSKTfQWRUyjblBSKeg.png',
      },
      {
        name: 'FastFeet',
        description: 'Projeto para conclusão do bootcamp 10 da Rocketseat',
        github: 'https://github.com/lcassiol/nodejs-fastfeet',
        image: 'https://miro.medium.com/max/730/1*Jr3NFSKTfQWRUyjblBSKeg.png',
      },
      {
        name: 'FastFeet',
        description: 'Projeto para conclusão do bootcamp 10 da Rocketseat',
        github: 'https://github.com/lcassiol/nodejs-fastfeet',
        image: 'https://miro.medium.com/max/730/1*Jr3NFSKTfQWRUyjblBSKeg.png',
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
    ],
    reactnative: [
      {
        name: 'FastFeet',
        description: 'Projeto para conclusão do bootcamp 10 da Rocketseat',
        github: 'https://github.com/lcassiol/RN-fastfeet',
        image:
          'https://github.com/lcassiol/RN-fastfeet/blob/master/src/assets/screenshots/Dashboardscreen.png?raw=true',
      },
    ],
  });
  const [filter, setFilter] = useState('reactnative');

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
            <ProjectTitle>>> {project.name}</ProjectTitle>
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
