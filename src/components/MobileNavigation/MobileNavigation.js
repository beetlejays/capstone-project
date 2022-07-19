import styled from 'styled-components';

export default function MobileNavigation({onClick}) {
  return (
    <MobileNavigationContainer onClick={onClick}>
      <LineOne />
      <LineTwo />
      <LineThree />
    </MobileNavigationContainer>
  );
}

const LineOne = styled.span`
  background: #3083dc;
  height: 3px;
  width: 30px;
  display: block;
  margin-bottom: 5px;
`;

const LineTwo = styled.span`
  background: #3083dc;
  height: 3px;
  width: 20px;
  display: block;
  margin-bottom: 5px;
`;

const LineThree = styled.span`
  background: #3083dc;
  height: 3px;
  width: 30px;
  display: block;
  margin-bottom: 5px;
`;

const MobileNavigationContainer = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 880px) {
    display: block;
  }
`;
