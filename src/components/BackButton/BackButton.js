import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import backButtonImage from '../../assets/blue-arrow.svg';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <PreviousPageButton onClick={() => navigate(-1)}>
        <img src={backButtonImage} alt="" />
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
  img {
    width: 20px;
  }
  &:hover {
    fill: white;
  }
`;
