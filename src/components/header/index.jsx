import React from 'react'
import logo from '../../assets/logo-full.svg'
import { BuscarInputContainer, Column, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from './styles'
import { Button } from '../Button'

export const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img width="60px" src={logo} alt='Logo da dio' />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/104390169?v=4' />
          ) : (
            <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}

        </Row>
      </Container>
    </Wrapper>
  )
}
