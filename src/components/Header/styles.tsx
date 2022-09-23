import styled from "styled-components"


export const Wrapper = styled.div `
background-color: #849F35;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.8em;
border-radius: 2px;
position: sticky;
top: 0px;
width: 100vw;
margin: auto;
`;

export const Logo = styled.div `
max-width: 80px;


& > img {
    max-width:100%;
    max-heigth:100%;
    object-fit: contain;
}

`



