import { FC, useState } from "react";

import { Button } from "../../../../components/Buttons";
import { ButtonWordings } from "../../../../wordings";
import { UserWithGardens } from "../..";
import { CreateGardenForm } from "../Gardens/CreateForm";
import { Avatar } from "./Avatar";
import { BioCard } from "./BioCard";
import * as S from "./styles";

export interface UserInfoProps {
  user: Pick<
    UserWithGardens,
    "profile_image" | "nickname" | "experience" | "bio"
  >;
}

export const UserInfo: FC<UserInfoProps> = ({
  user: { profile_image, nickname, experience, bio },
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <S.Wrapper>
      <Avatar profile_image={profile_image} />
      <BioCard nickname={nickname} experience={experience} bio={bio} />
      <Button onClick={(): void => setIsOpen(true)}>
        {ButtonWordings.createGarden}
      </Button>
      {isOpen && <CreateGardenForm setIsOpen={setIsOpen} />}
    </S.Wrapper>
  );
};
