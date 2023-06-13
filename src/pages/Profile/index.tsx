import { FC } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { axios } from "../../ClientProvider";
import { CommentSection } from "./components/CommentSection";
import { Gardens } from "./components/Gardens";
import { UserInfo } from "./components/UserInfo";
import * as S from "./styles";

export interface UserWithGardens {
  id: number;
  profile_image: string;
  nickname: string;
  experience: 1 | 2 | 3 | 4 | 5;
  bio: string;
  gardens: Garden[];
}
export interface Garden {
  id: number;
  title: string;
  description: string;
  zipcode: string;
  image: string;
}

export interface Comment {
  id: number;
  author: {
    nickname: string;
    profile_image: string;
    experience: 1 | 2 | 3 | 4 | 5;
  };
  content: string;
  created_at: string;
}

export const Profile: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  const { data: { data } = {} } = useQuery(
    ["user", id],
    async () => axios.get<UserWithGardens>(`users/${id}`),
    {
      keepPreviousData: true
    }
  );

  if (!data) return null;

  const { gardens, ...user } = data;

  return (
    <S.Layout>
      <UserInfo user={user} />
      <Gardens gardens={gardens} />
      <CommentSection userId={id} />
    </S.Layout>
  );
};
