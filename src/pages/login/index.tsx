import React,{useState,FormEvent,ChangeEvent} from "react";
import { FaSignInAlt } from "react-icons/fa";
//import notify from "../../utils/notify";
import {
  Wrapper,
  LoginContainer,
  InputContainer,
  Input,
  Button,
  LinkBack,
} from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function Handlelogin(e:FormEvent) {
    e.preventDefault();


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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />
          <Input
            type="password"
            placeholder="Digite seu password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
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