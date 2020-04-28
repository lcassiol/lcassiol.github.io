import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #009999;
`;

export const TitleDescription = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #666;
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  justify-items: center;

  @media (max-width: 1248px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 902px) {
    grid-template-columns: 1fr;
  }

  margin-top: 50px;
`;

export const Project = styled.div`
  cursor: pointer;
  position: relative;
  width: 300px;

  .overlay {
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.9s ease;
    width: 320px;
    border-radius: 10px;
  }

  &:hover .overlay {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.img`
  display: block;
  height: auto;
  width: 320px;
  border-radius: 10px;
`;

export const DetailsWrapper = styled.div`
  color: #fff;
  font-size: 20px;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const DetailsTitle = styled.div``;

export const DetailsText = styled.div``;

export const Link = styled.a``;
