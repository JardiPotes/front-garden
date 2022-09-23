import React from 'react'
import * as S from './styles'
import Logo from '../../assets/jardi-logo.png'



export function Header(){

    return(
        <S.Wrapper>
            <S.Logo> <img src={Logo} /> </S.Logo>
            <div>
                <h2>Notre charte</h2>            
                </div>
        </S.Wrapper>
    )
}