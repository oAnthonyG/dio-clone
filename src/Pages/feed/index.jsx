
import { Header } from '../../components/header';
import { Column, Container, Title, TitleHighlight } from './styles';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

export const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
        <TitleHighlight># Ranking 5 Top da Semana</TitleHighlight>
          <UserInfo percentual={35} name="Anthony Guilherme" image="https://avatars.githubusercontent.com/u/104390169?v=4" />
          <UserInfo percentual={12} name="Anthony Guilherme" image="https://avatars.githubusercontent.com/u/104390169?v=4" />
          <UserInfo percentual={90} name="Anthony Guilherme" image="https://avatars.githubusercontent.com/u/104390169?v=4" />
          <UserInfo percentual={50} name="Anthony Guilherme" image="https://avatars.githubusercontent.com/u/104390169?v=4" />
        </Column>
      </Container>
    </>
  )
}
