import { FC, useState } from "react";

import UploadIcon from "../../assets/upload-icon.png";
import * as S from "./styles";

export const Uploader: FC = ({ register }) => {
  return (
    <S.Wrapper>
      <label htmlFor="profile_image">Image de profil :</label>
      <input name="profile_image" type="file" {...register("profile_image")} />
    </S.Wrapper>
  );
};
