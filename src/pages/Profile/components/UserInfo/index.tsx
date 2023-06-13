import { FC, useState } from "react";

import { Button } from "../../../../components/Buttons";
import { ButtonWordings } from "../../../../wordings";
import { UserWithGardens } from "../..";
import { CreateGardenForm } from "../Gardens/CreateForm";
import { Avatar } from "./Avatar";
import { BioCard } from "./BioCard";
import * as S from "./styles";
import { getUser } from "../../../../utils/user";
import useToken from "../../../../utils/useToken";
import { useParams } from "react-router-dom";

export interface UserInfoProps {
  user: Pick<
    UserWithGardens,
    "profile_image" | "nickname" | "experience" | "bio"
  >;
}

export const UserInfo: FC<UserInfoProps> = ({
  user: { profile_image, nickname, experience, bio }
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { id } = useParams();
  const connectedUser = getUser();
  const { token } = useToken();
  const isConnected = Boolean(connectedUser && token);
  const isConnectedUser = Boolean(
    isConnected && id && connectedUser?.id.toString() === id
  );

  return (
    <S.Wrapper>
      <Avatar
        profile_image={profile_image}
        isConnected={isConnected}
        isConnectedUser={isConnectedUser}
        id={id}
      />
      <BioCard nickname={nickname} experience={experience} bio={bio} />
      {isConnectedUser && (
        <Button onClick={(): void => setIsOpen(true)}>
          {ButtonWordings.createGarden}
        </Button>
      )}
      {isOpen && isConnectedUser && <CreateGardenForm setIsOpen={setIsOpen} />}
    </S.Wrapper>
  );
};
