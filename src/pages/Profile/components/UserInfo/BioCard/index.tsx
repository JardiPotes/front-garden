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
      <S.SpacerRowWrapper>
        <S.Title>{nickname}</S.Title>
        {isConnectedOwner && (
          <S.Button onClick={(): void => setFormModalOpen(true)}>
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </S.Button>
        )}
        {isConnectedOwner && isFormModalOpen && (
          <EditForm
            setIsOpen={setFormModalOpen}
            triggerRefetch={triggerRefetch}
            {...userProps}
          />
        )}
      </S.SpacerRowWrapper>
      <Experience
        experience={experience}
        wording={UserProfileWordings.experience}
      />
      <S.Bio>{bio}</S.Bio>
    </Card>
  );
};
