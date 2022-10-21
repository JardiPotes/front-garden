import React from "react";

export type User = {
    userName?: string,
    imageUrl?: string,
    bio?: string, 
}

type ProfilePageProps = {
    user: User;
}

const MOCK_USER: User = {
    userName: "iloveflowers",
    imageUrl: '',
    bio: "Bonjour, j'adore les fleurs et les animaux !"
}

export const ProfilePage = ({user}: ProfilePageProps) => { 
    
    return (
        <h1>Le profil de ${user?.userName}</h1>
    )
}