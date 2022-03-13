import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";


interface ILoading {
    loading?: boolean;
  }


export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 32px;
`;
export const RegisterContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 530px;
  border-radius: 12px;
  padding: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  > h1 {
    color: #191920;
    text-align: center;
  }
  > img {
    height: 300px;
    width: 200px;
    @media (max-width: 768px) {
    display: none;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  > p {
    display: flex;
    align-items: center;
    margin: 16px 0 8px 0;
    color: #191920;
    font-size: 16px;
    font-weight: bold;
    align-self: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  > p {
    display: flex;
    align-items: center;
    margin: 16px 0 0px 0;
    color: #191920;
    font-size: 14px;
  }
`;
export const Input = styled.input`
  height: 50px;
  border-radius: 24px;
  padding: 8px 24px;
  color: #191920;
  font-weight: bold;
  border: solid 1px #191920;
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
export const Button = styled.button.attrs((props:ILoading) => ({
  type: "submit",
  disabled: props.loading,
}))`
  border-radius: 24px;
  font-weight: bold;
  height: 50px;
  width: 90%;
  border-style: none;
  background-color: #191920;
  margin-top: 32px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${(props:ILoading) =>
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
    margin-right:8px;
  }
`;