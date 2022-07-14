import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {ReactComponent as BackButtonImage} from '../../assets/blue-arrow.svg';
import LeftArrow from '../LeftArrow/LeftArrow';

export default function BackButton({hotpink}) {
  const navigate = useNavigate();
  return (
    <>
      <PreviousPageButton onClick={() => navigate(-1)}>
        <BackButtonImage />
        <LeftArrow fill="hotpink" />
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
  left: 20px;
`;
