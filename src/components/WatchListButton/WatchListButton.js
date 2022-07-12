import styled from 'styled-components';

export default function WatchListButton() {
  return <WatchList>Add to watchlist</WatchList>;
}

const WatchList = styled.button`
  background-color: #3083dc;
  width: 100%;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 1.4rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #2762a1;
  }
`;
