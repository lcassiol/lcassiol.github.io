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

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;

  button + button {
    margin-left: 10px;
  }
`;

export const FilterButton = styled.button`
  color: ${(props) => (props.active ? '#fff' : '#666')};
  border: 1px solid #009999;
  font-size: 16px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  padding: 8px;
  border-radius: 5px;
  background: ${(props) =>
    props.active ? 'rgb(0, 153, 153, 0.84)' : 'rgb(0, 153, 153, 0.4)'};

  transition: 0.7s ease;

  &:hover {
    color: #fff;
    background: rgb(0, 153, 153, 0.6);
  }
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
  top: 45%;
  transform: translate(-50%, -50%);
`;

export const DetailsTitle = styled.div`
  font-weight: bold;
  color: #f0f0f0;
  font-size: 24px;
`;

export const DetailsText = styled.div`
  width: 290px;
  margin-top: 10px;
  font-size: 12px;
`;

export const Link = styled.a`
  cursor: pointer;
  display: block;
  margin: auto;
  width: 50%;
  padding: 10px;
  border: 1px solid #009999;
  border-radius: 5%;
  margin-top: 15px;
  text-decoration: none;
  color: #fff;
  transition: 0.5s ease;
  background: rgb(0, 153, 153, 0.4);
  font-size: 14px;

  &:hover {
    background: rgb(0, 153, 153, 0.9);
  }
`;
