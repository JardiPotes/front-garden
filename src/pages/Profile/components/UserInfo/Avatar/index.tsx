import { AxiosError, AxiosResponse } from "axios";
import { FC } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import { axios } from "../../../../../ClientProvider";
import { Button } from "../../../../../components/Buttons";
import { getUser } from "../../../../../utils/user";
import { UserInfoProps } from "..";
import * as S from "./styles";

type AvatarProps = Pick<UserInfoProps["user"], "profile_image">;

type CreateConvArgs = {
  chat_sender_id: number | string | undefined;
  chat_receiver_id: number | string | undefined;
};

export const Avatar: FC<AvatarProps> = ({ profile_image }) => {
  const user = getUser();
  const { id } = useParams();
  const navigate = useNavigate();

  const postData = (): void => {
    try {
      createConversation({
        chat_sender_id: user?.id,
        chat_receiver_id: id
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, mutate: createConversation } = useMutation(
    async (data: CreateConvArgs) => {
      return await axios.post(
        `conversations?current_user_id=${user?.id}`,
        data
      );
    },
    {
      onSuccess: (res: AxiosResponse) => {
        navigate(`/messages/${res.data.id}`);
      },
      onError: (err: AxiosError) => {
        // eslint-disable-next-line no-console
        console.dir({ err });
        navigate(`/messages/${err.response.data.conversation_id}`);
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
