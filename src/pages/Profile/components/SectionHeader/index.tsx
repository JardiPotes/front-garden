import { FC } from "react";

import * as S from "./styles";

export const SectionHeader: FC<{ children: string }> = ({ children }) => (
  <S.SectionHeader>{children}</S.SectionHeader>
);
