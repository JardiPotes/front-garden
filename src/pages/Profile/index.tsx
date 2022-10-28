import React from "react";
import { UserInfo } from "./components/infos";

export type User = {
    userName?: string,
    bio?: string, 
    imageUrl?: string,
    ville?: string, 
    experience?: number, 
}

type ProfilePageProps = {
    user?: User;
}

const MOCK_USER: User = {
    userName: "iloveflowers",
    imageUrl: 'https://api.francelive.fr/resources/Jrb9CPou0YLx68fBAvHJ0QB4Cth6L6ad7U9Ya_e5CN7QuXlWHREY9gYf5UMJMnKE19zunuitT-c7_5JKa3W9jcc696DDxOX3kGhXmGT33eE',
    bio: "Bonjour, j'adore les fleurs et les animaux !",
    ville: "Vesoul",
    experience: 3, 
}

export const ProfilePage = ({user = MOCK_USER}: ProfilePageProps) => { 
    
    return (
        <>
        <h1>Le profil de {user?.userName}</h1>
        <UserInfo userInfo={user}/>
        </>
    )
}