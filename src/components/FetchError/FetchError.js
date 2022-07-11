import styled from 'styled-components';

export default function FetchError() {
  return (
    <div>
      <ErrorHeadline>Ooooops... Something went wrong.</ErrorHeadline>
      <ErrorSubline>Can you check back later?</ErrorSubline>
    </div>
  );
}

const ErrorHeadline = styled.h4`
  color: #3083dc;
  padding: '10px';
  font-size: 2rem;
`;

const ErrorSubline = styled.p`
  padding-top: 1rem;
  color: white;
  font-size: 1.2rem;
`;
