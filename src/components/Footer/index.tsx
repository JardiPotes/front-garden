import {FC} from 'react';

import {FooterWordings} from '../../assets/wordings';
import * as S from './styles';

export const Footer: FC = () => (
  <S.Wrapper>
    <S.TitleWrapper>
      <S.Title>{FooterWordings.title}</S.Title>
    </S.TitleWrapper>
    <S.SectionWrapper>
      <nav>
        <S.SubSectionWrapper>
          <S.SubTitle>{FooterWordings.about}</S.SubTitle>
          <S.StyledLink to="intro">{FooterWordings.whoAreWe}</S.StyledLink>
          <S.StyledLink to="wip">{FooterWordings.jardiPotesStory}</S.StyledLink>
          <S.StyledLink to="wip">{FooterWordings.theyMentionedUs}</S.StyledLink>
        </S.SubSectionWrapper>
      </nav>
      <nav>
        <S.SubSectionWrapper>
          <S.SubTitle>{FooterWordings.socials}</S.SubTitle>
          <S.StyledLink to="wip">{FooterWordings.instagram}</S.StyledLink>
          <S.StyledLink to="wip">{FooterWordings.tikTok}</S.StyledLink>
          <S.StyledLink to="wip">{FooterWordings.twitter}</S.StyledLink>
        </S.SubSectionWrapper>
      </nav>
      <nav>
        <S.SubSectionWrapper>
          <S.SubTitle>{FooterWordings.terms}</S.SubTitle>
          <S.StyledLink to="wip">{FooterWordings.dataProtection}</S.StyledLink>
          <S.StyledLink to="intro">{FooterWordings.charte}</S.StyledLink>
          <S.StyledLink to="wip">{FooterWordings.legal}</S.StyledLink>
        </S.SubSectionWrapper>
      </nav>
    </S.SectionWrapper>
  </S.Wrapper>
);
