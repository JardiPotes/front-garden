import { FC, useState } from "react";
import { useParams } from "react-router-dom";

import { ButtonWordings } from "../../../../assets/wordings";
import { Button } from "../../../../components/Button";
import useToken from "../../../../hooks/useToken";
import { getUser } from "../../../../utils/user";
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
      <div>
        {isConnectedUser && (
          <Button
            onClick={(): void => setIsOpen(true)}
            data-test-id="create_garden"
          >
            {ButtonWordings.createGarden}
          </Button>
        )}
        {isOpen && isConnectedUser && (
          <CreateGardenForm setIsOpen={setIsOpen} />
        )}
      </div>
    </S.Wrapper>
  );
};
