import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

import BannerImage from '../../assets/banner.png';
import { Header } from '../../components/header';
import { Container, TextContent, Title, TitleHighlight } from './styles';

export const Home = () => {
  const navigate = useNavigate();
  const handleCLickSignIn = () =>{
    navigate('/login')
  }
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnoligias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
            desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant='secondary' onClick={handleCLickSignIn} />
        </div>
        <div>
          <img src={BannerImage} alt='Imagem principal' />
        </div>
      </Container>
    </>
  )
}
