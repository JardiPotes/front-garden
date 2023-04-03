import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

import { UserData } from "../SignUpForm";
import * as S from "./styles";

interface UploaderProps {
  register: UseFormRegister<UserData>;
}

export const Uploader: FC<UploaderProps> = ({ register }) => {
  return (
    <S.Wrapper>
      <label htmlFor="profile_image">Image de profil :</label>
      <input type="file" accept="image/*" {...register("profile_image")} />
    </S.Wrapper>
  );
};
