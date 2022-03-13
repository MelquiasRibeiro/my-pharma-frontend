import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

interface ILoading {
  loading?: boolean;
}

interface IError {
  error?: boolean|null;
}

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 32px;
`;
export const LoginContainer = styled.form`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 450px;
  border-radius: 12px;
  padding: 16px;
  > h1 {
    color: #191920;
    margin-bottom: 16px;
  }
  > p {
    display: flex;
    align-items: center;
    margin-top: 32px;
    color: #191920;
    font-size: 16px;
    font-weight: bold;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 32px;
`;
export const Input = styled.input<IError>`
  height: 50px;
  border-radius: 24px;
  padding: 8px 24px;
  color: #191920;
  font-weight: bold;
  border: 1px solid ${(props) => (props.error ? '#ff6b6b' : '#191920')};
  margin-top: 16px;
  font-size: 16px;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;
export const Button = styled.button<ILoading>`
  border-radius: 24px;
  font-weight: bold;
  height: 50px;
  width: 90%;
  border-style: none;
  background-color: #191920;

  &:hover {
    opacity: 0.7;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s infinite;
      }
    `}
`;
export const LinkBack = styled(Link)`
  transition: opacity 0.2s;
  text-decoration: none;
  color:inherit;
  display:flex;
  align-items:center;
  &:hover {
    opacity: 0.7;
  }
  > svg{
    margin-left:8px;
  }
`;