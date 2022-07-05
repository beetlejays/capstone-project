import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <FooterContainer>
        <h2>Search Link</h2>
      </FooterContainer>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  height: 5rem;
  background-color: rgb(0, 0, 0);
  color: white;
  width: 100%;
`;

const FooterContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 0 20px;
`;
