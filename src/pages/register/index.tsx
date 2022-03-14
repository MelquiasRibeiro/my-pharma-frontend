/* eslint-disable no-unused-expressions */
import {useState,FormEvent,ChangeEvent} from "react";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
import {
  Wrapper,
  RegisterContainer,
  InfoContainer,
  FormContainer,
  InputContainer,
  Input,
  Button,
  LinkBack,
} from "./styles";
import form from "../../assets/images/form.svg";
import api from "../../services/api"
import notify from '../../utils/notify'


export default function Register() {
  const [loading, setLoading] = useState(false);
  const [userData,setUserData] =useState({
    "name": "",
    "email": "",
    "password": "",
    })

  function handleInputChange(e:ChangeEvent<HTMLInputElement>){
      const {name,value} = e.target;
      setUserData({...userData,[name]:value})
  }

  async function handleRegister (e:FormEvent) {
    setLoading(true)
  
     e.preventDefault()
      try {
        const data ={
          ...userData,
        }
      await api.post('checkout',data);
      notify('cadastrado com sucesso','sucess',)
    } catch (error) {
      notify("error ao salvar",'error')  
    }finally{
      setLoading(false)
    }
    
    }

  return (
    <Wrapper>
      <RegisterContainer>
        <InfoContainer>
          <h1>Crie sua conta</h1>
          <img src={form} alt="form" />
        </InfoContainer>
        <FormContainer onSubmit={handleRegister}>
          <InputContainer>
            <p>Dados Pessoais</p>
            <Input
              type="text"
              placeholder="Digite seu nome"
              required
              value={userData.name}
              onChange={handleInputChange}
              name="name"
              id="name"
              />
          </InputContainer>
          <InputContainer>
            <p>Email e senha</p>
            <Input
              type="email"
              placeholder="Digite seu email"
              required
              value={userData.name}
              name="email"
              id="email"
            />
            <Input
              type="password"
              placeholder="Digite sua senha"
              required
              value={userData.password}
              name="password"
              id="password"
            />

          </InputContainer>
          <Button loading={loading}>
            {loading ? <FaSpinner color="#fff" size={14} /> : "CADASTRAR"}
          </Button>
          <p>
            <LinkBack to="/">
              <FaArrowLeft /> já tem cadastro?
            </LinkBack>
          </p>
        </FormContainer>
      </RegisterContainer>
    </Wrapper>
  );
}