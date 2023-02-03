import * as S from './styles'
import {StyledLink} from '../Link/styles'


export function Footer(){

    return(
        <S.Wrapper>
            <div style={{display: "flex", flexDirection: "column"}}>
                <nav>
                <StyledLink to="mentions"> Mentions Légales </StyledLink>
                <StyledLink to="contacts"> Contacts </StyledLink>
                </nav>
            </div>
        </S.Wrapper>
    )
}
