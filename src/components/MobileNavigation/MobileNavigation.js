import styled from 'styled-components';

export default function MobileNavigation() {
  return (
    <MobileNavigationContainer>
      <span>one</span>
    </MobileNavigationContainer>
  );
}

const MobileNavigationContainer = styled.div`
  display: none;
  @media (max-width: 880px) {
    display: block;
  }
`;
