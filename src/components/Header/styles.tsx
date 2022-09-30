import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Wrapper = styled.div `
background-color: #849F35;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.8em;
border-radius: 2px;
position: sticky;
top: 0px;
width: 100%;
`;

export const StyledNav = styled.nav `
  display : flex;
  justify-content : flex-end;
  `
  
export const Logo = styled.div `
max-width: 80px;

& > img {
    max-width:100%;
    max-heigth:100%;
    object-fit: contain;
}
`

export const StyledLink = styled(Link)`
 
`



