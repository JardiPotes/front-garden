import { FC } from "react";
import * as S from "./styles";

export const UserInfo: FC = ({ user }) => (
  <S.Wrapper>
    <Avatar image={user.avatar} />
    <BioCard name={user.name} experience={user.experience} prez={user.prez} />
  </S.Wrapper>
);
