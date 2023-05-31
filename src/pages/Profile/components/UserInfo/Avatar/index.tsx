import { FC } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import { axios } from "../../../../../ClientProvider";
import { Button } from "../../../../../components/Buttons";
import { getUser } from "../../../../../utils/user";
import { UserInfoProps } from "..";
import * as S from "./styles";

type AvatarProps = Pick<UserInfoProps["user"], "profile_image">;

export const Avatar: FC<AvatarProps> = ({ profile_image }) => {
  const user = getUser();
  const { id } = useParams();
  const navigate = useNavigate();

  const postData = () => {
    try {
      createConversation({
        chat_sender_id: user.id,
        chat_receiver_id: id
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, mutate: createConversation } = useMutation(
    async (data) => {
      return await axios.post(`conversations`, data);
    },
    {
      onSuccess: (res) => {
        console.log("ok", res);
        navigate(`/messages/${res.data.id}`);
      },
      onError: (err) => {
        // eslint-disable-next-line no-console
        console.dir({ err });
      }
    }
  );

  return (
    <div>
      <S.Avatar src={profile_image} />
      <Button onClick={postData}>Message me</Button>
    </div>
  );
};
