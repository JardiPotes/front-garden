import * as S from "./styles";
import { FooterWordings } from "../../wordings";
import { FC } from "react";

export const Footer: FC = () => (
  <S.Wrapper>
    <S.TitleWrapper>
      <S.Title>{FooterWordings.title}</S.Title>
    </S.TitleWrapper>
    <S.SectionWrapper>
      <nav>
        <S.SubSectionWrapper>
          <S.SubTitle>{FooterWordings.about}</S.SubTitle>
          <S.StyledLink to="about">{FooterWordings.whoAreWe}</S.StyledLink>
          <S.StyledLink to="history">
            {FooterWordings.jardiPotesStory}
          </S.StyledLink>
          <S.StyledLink to="media">
            {FooterWordings.theyMentionedUs}
          </S.StyledLink>
        </S.SubSectionWrapper>
      </nav>
      <nav>
        <S.SubSectionWrapper>
          <S.SubTitle>{FooterWordings.socials}</S.SubTitle>
          <S.StyledLink to="instagram">{FooterWordings.instagram}</S.StyledLink>
          <S.StyledLink to="tiktok">{FooterWordings.tikTok}</S.StyledLink>
          <S.StyledLink to="twitter">{FooterWordings.twitter}</S.StyledLink>
        </S.SubSectionWrapper>
      </nav>
      <nav>
        <S.SubSectionWrapper>
          <S.SubTitle>{FooterWordings.terms}</S.SubTitle>
          <S.StyledLink to="data_protection">
            {FooterWordings.dataProtection}
          </S.StyledLink>
          <S.StyledLink to="charte">{FooterWordings.charte}</S.StyledLink>
          <S.StyledLink to="mentions_legales">
            {FooterWordings.legal}
          </S.StyledLink>
        </S.SubSectionWrapper>
      </nav>
    </S.SectionWrapper>
  </S.Wrapper>
);
