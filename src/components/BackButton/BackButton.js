import {useNavigate} from 'react-router-dom';

import backButtonImage from '../../assets/blue-arrow.svg';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>
        <img src={backButtonImage} alt="" />
      </button>
    </>
  );
}
