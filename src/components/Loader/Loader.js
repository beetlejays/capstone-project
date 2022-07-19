import GridLoader from 'react-spinners/GridLoader';
import styled from 'styled-components';

export default function Loader(isLoading) {
  return (
    <WrapperLoader>
      <GridLoader color="#3083dc" loading={isLoading} size={33} />
      <p>One Moment, we are checking movies for you</p>
    </WrapperLoader>
  );
}

const WrapperLoader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: white;
    padding-top: 2rem;
    font-size: 1.2rem;
  }
`;
