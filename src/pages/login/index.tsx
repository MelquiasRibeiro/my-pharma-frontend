import React,{useState,FormEvent,ChangeEvent} from "react";
import { FaSignInAlt } from "react-icons/fa";
import notify from "../../utils/notify";
import api from "../../services/api";
import {
  Wrapper,
  LoginContainer,
  InputContainer,
  Input,
  Button,
  LinkBack,
} from "./styles";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [userCredentials,setUserCredentials] =useState({
    "email": "",
    "password": "",
    })

  function handleInputChange(e:ChangeEvent<HTMLInputElement>){
      const {name,value} = e.target;
      setUserCredentials({...userCredentials,[name]:value})
  }

  async function Handlelogin (e:FormEvent) {
    setLoading(true)
  
     e.preventDefault()
      try {
        const data ={
          ...userCredentials,
        }
      await api.post('checkout',data);
      notify('Bem vindo','sucess',)
    } catch (error) {
      notify(`Erro ao logar, verifique seus dados ou tente mais tarde ` ,'error')  
    }finally{
      setLoading(false)
    }
    
    }
  return (
    <Wrapper>
      <LoginContainer onSubmit={Handlelogin}>
        <h1>Faça seu login</h1>
        <InputContainer>
          <Input
            type="email"
            placeholder="Digite seu email"
            required
            value={userCredentials.email}
            onChange={handleInputChange}
            error={error}
            name="email"
            id="email"
          />
          <Input
            type="password"
            placeholder="Digite seu password"
            required
            value={userCredentials.password}
            onChange={handleInputChange}
            error={error}
            name="password"
            id="password"
          />
        </InputContainer>
        <Button loading={loading}>ENTRAR</Button>
        <p>
          <LinkBack to="/register">
            Cadastre-se aqui
            <FaSignInAlt color="#191920" />
          </LinkBack>
        </p>
      </LoginContainer>
    </Wrapper>
  );
}