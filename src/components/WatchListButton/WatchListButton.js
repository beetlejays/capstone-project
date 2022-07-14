import styled from 'styled-components';

export default function WatchListButton({onClick, buttonText, backgroundColor}) {
  return (
    <AddToWatchListButton type="button" backgroundColor={backgroundColor} onClick={onClick}>
      {buttonText}
    </AddToWatchListButton>
  );
}

const AddToWatchListButton = styled.button`
  background-color: ${({backgroundColor}) => backgroundColor};
  width: 100%;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: orange;
    transform: translateX(7px);
  }
  &:active {
    background: #ccc;
    color: white;
  }
`;
