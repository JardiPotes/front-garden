import React from 'react'
import * as S from './styles'
import Logo from '../../assets/jardi-logo.png'



export function Header(){

    return(
        <S.Wrapper>
            <S.Logo> <img src={Logo} /> </S.Logo>
            <nav> 
                <S.StyledLink to="home"> Home </S.StyledLink>
                <S.StyledLink to="rules" >
                    Fonctionnement
                </S.StyledLink>
            </nav>
            <S.StyledLogin>
                <S.StyledLink to=""> Se connecter </S.StyledLink>
                <S.StyledLink to="" >
                    Créer un compte
                </S.StyledLink>
            </S.StyledLogin>
        </S.Wrapper>
    )
}