import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styles'

export const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://www.advertserve.com/blog/images/bannerflow.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/104390169?v=4' />
          <div>
            <h4>Anthony</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito o curso de html e css no botcamp dio Global avanade... <strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JAVASCRIPT</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}
