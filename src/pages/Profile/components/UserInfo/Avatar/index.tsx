import { FC } from "react";
import * as S from "./styles";

interface AvatarProps {
  profile_image: string | null;
}

export const Avatar: FC<AvatarProps> = ({ profile_image }) => {
  const defaultImage =
    "https://www.1min30.com/wp-content/uploads/2017/07/cetelem.jpg";

  return <S.Avatar src={profile_image ?? defaultImage} />;
};
