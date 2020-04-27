import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import euImg from '../../assets/eu.jpg';
import { Container, Image, Name, Address, Description, Links } from './styles';

export default function Home() {
  return (
    <Container>
      <Image src={euImg} alt="cassio c" />
      <Name>Cássio Carvalho</Name>
      <Address>Recife, PE</Address>
      <Description>
        Gosto bastante de tecnologia, sempre atento aos atuais avanços e tudo
        que a tecnologia proporciona, não consigo me imaginar fazendo algo
        diferente e acredito que todas as pessoas deveriam aprender a programar
        para estimular o pensamento lógico.
      </Description>
      <Links>
        <a target="_blank" href="http://github.com/lcassiol">
          <FontAwesomeIcon size="3x" icon={['fab', 'github-square']} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/c%C3%A1ssio-carvalho-58270853"
        >
          <FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} />
        </a>
      </Links>
    </Container>
  );
}
