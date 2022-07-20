import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {ReactComponent as BackButtonImage} from '../../assets/blue-arrow.svg';

export default function BackButton({hotpink}) {
  const navigate = useNavigate();
  return (
    <>
      <PreviousPageButton onClick={() => navigate(-1)}>
        <BackButtonImage />
      </PreviousPageButton>
    </>
  );
}

const PreviousPageButton = styled.button`
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.3s;
  display: none;
  &:hover {
    transform: translateX(-8px);
    filter: invert;
  }
  @media (max-width: 880px) {
    display: block;
  }
`;
