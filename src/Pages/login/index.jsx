
import { MdEmail, MdLock } from "react-icons/md";

import { Input } from "../../components/Input"
import { Header } from "../../components/header"
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleCLickSignIn = () => {
    navigate('/feed')
  }
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
            <form>
              <Input placeholder="Email" leftIcon={MdEmail} />
              <Input placeholder="Senha" type="password" leftIcon={MdLock} />
              <Button title="Entrar" variant='secondary' onClick={handleCLickSignIn} type="button" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
