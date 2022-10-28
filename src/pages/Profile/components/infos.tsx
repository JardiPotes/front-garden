import React from "react";
import { StyledImage, ImgWrapper } from "../styles" 

import { User } from '../index'

type UserInfoProps = {
    userInfo?: User, 
}

const getExp = (n: number) => {
    let exp = ""
    for (let i = 0; i < n; i++) { exp += "*"
   }
   return exp
 }


export const UserInfo = ({userInfo}: UserInfoProps) => {
    const url = userInfo?.imageUrl
    const name = userInfo?.userName
    const city = userInfo?.ville
    const exp = userInfo?.experience ? getExp(userInfo?.experience) : 0
    
    return (
        <>
    <ImgWrapper>
     <StyledImage src={url} />
    </ImgWrapper>
    <div>
        <p>Nom: {name}</p>
        <p>Ville : {city}</p>
        <p>Experience: {exp}</p> 
    </div>
    </>
    )
}