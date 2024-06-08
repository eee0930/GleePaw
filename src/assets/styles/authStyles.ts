import { styled } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: calc(100% - 20px);
  padding: 50xp 0px;
  @media (min-width: 768px) {
    margin-top: -30px;
    width: 420px;
    justify-content: center;
  }
`;
export const Title = styled.h1`
  font-size: 30px;
  color: #31725c;
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: solid 2px #31725c;
  width: 100%;
  font-size: 16px;
  &[type='submit'] {
    cursor: pointer;
    background-color: #31725c;
    color: #fff;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    &:hover {
      background-color: #59a98e;
      border-color: #59a98e;
    }
  }
`;
export const Error = styled.span`
  font-width: 600;
  color: tomato;
`;
export const Switcher = styled.span`
  margin-top: 30px;
  a {
    color: #31725c;
  }
`;
