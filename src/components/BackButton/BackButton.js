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
  position: absolute;
  padding: 0.5rem;
  left: 20px;
  transition: 0.3s;
  &:hover {
    transform: translateX(-8px);
    filter: invert;
  }
`;
