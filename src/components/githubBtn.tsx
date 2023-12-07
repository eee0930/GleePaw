import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import styled from 'styled-components';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Button = styled.span`
  margin-top: 30px;
  background-color: #24292f;
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

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo src="/icon/github-logo.svg" />
      Continue with Github
    </Button>
  );
}
