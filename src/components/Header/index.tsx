import React from 'react'
import * as S from './styles'
import Logo from '../../assets/jardi-logo.png'



export function Header(){

    return(
        <S.Wrapper>
            <S.Logo> <img src={Logo} /> </S.Logo>
            <S.StyledNav> 
      {/* <S.StyledLink to=""> A propos </S.StyledLink>
      <S.StyledLink to="" >
        Jouer
      </S.StyledLink> */}
    </S.StyledNav>
        </S.Wrapper>
    )
}