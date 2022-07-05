import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Search() {
  return (
    <>
      <Header />
      <SearchContainer>
        <h1>Please type in your movie Search</h1>
        <SearchInput type="text" />
      </SearchContainer>

      <Footer />
    </>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45vh;
`;

const SearchInput = styled.input`
  margin-top: 2rem;
  padding-top: 2rem;
  border-radius: 40px;
  width: 80vw;
  background-color: #666;
  border: none;
`;
