import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import styled from 'styled-components';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Button = styled.span`
  margin-top: 10px;
  background-color: #152f70;
  font-width: 400;
  font-size: 15px;
  color: #fff;
  width: 100%;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Logo = styled.img`
  height: 25px;
  margin-right: 5px;
`;

export default function GoogleButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo src="/icon/google-logo.svg" />
      Continue with Google
    </Button>
  );
}
