import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

import { UserProfileWordings } from "../../../../../assets/wordings";
import { Card } from "../../../../../components/Card";
import { Experience } from "../../Experience";
import { UserInfoProps } from "..";
import * as S from "./styles";
import { getUser } from "../../../../../utils/user";
import { useParams } from "react-router-dom";
import { EditForm } from "../EditForm";
import { SpaceBetweenRow } from "../../../../../components/Wrappers/SpaceBetweenRow";
import { TransparentButton } from "../../../../../components/Button/TransparentButton";

type BioCardProps = Pick<
  UserInfoProps["user"],
  "nickname" | "bio" | "experience"
>;

export const BioCard: FC<BioCardProps> = ({ triggerRefetch, ...userProps }) => {
  const { nickname, bio, experience } = userProps;

  const user = getUser();
  const { id } = useParams();
  const isConnectedOwner = !!user && user.id.toString() === id;

  const [isFormModalOpen, setFormModalOpen] = useState(false);
  return (
    <Card style={{ width: "100%" }}>
      <SpaceBetweenRow>
        <S.Title>{nickname}</S.Title>
        {isConnectedOwner && (
          <TransparentButton onClick={(): void => setFormModalOpen(true)}>
            <FontAwesomeIcon icon={faEdit} size="xl" />
          </TransparentButton>
        )}
        {isConnectedOwner && isFormModalOpen && (
          <EditForm
            setIsOpen={setFormModalOpen}
            triggerRefetch={triggerRefetch}
            {...userProps}
          />
        )}
      </SpaceBetweenRow>
      <Experience
        experience={experience}
        wording={UserProfileWordings.experience}
      />
      <S.Bio>{bio}</S.Bio>
    </Card>
  );
};
