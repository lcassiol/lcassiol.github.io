import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 220px;
  height: 210px;
  border-radius: 50%;
  border: 2px solid #009999;
`;

export const Name = styled.div`
  margin-top: 15px;
  font-size: 27px;
  font-weight: bold;
  min-width: 200px;
`;

export const Address = styled.div`
  font-size: 20px;
  color: #666;
  min-width: 100px;
`;

export const Description = styled.div`
  margin-top: 5px;
  padding-top: 10px;
  font-size: 17px;
  min-width: 300px;
  max-width: 540px;
  border-top: 2px solid #f0f0f0;
  color: #181818;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
`;

export const Links = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 5px;
  padding-top: 10px;

  svg {
    color: #009999;
    transition: color 0.4s;
  }

  a:hover {
    svg {
      color: #006666;
    }
  }

  a + a {
    margin-left: 20px;
  }
`;
