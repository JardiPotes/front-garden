import { AxiosResponse } from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

import { axios } from "../../ClientProvider";
import { CommonQueryArgs } from "../../types";
import { getUser } from "../../utils/user";
import Conversation from "./components/Conversation";
import PreviewSection from "./components/PreviewSection";
import * as S from "./styles";

export type Message = {
  content: string;
  conversation_id: number;
  id: number;
  sender_id: number;
  sent_at: string;
};

type Conversation = {
  id: number;
  chat_sender_id: number;
  chat_receiver_id: number;
  latest_message: Message;
  updated_at: string;
};

type ConvResults = {
  count: number;
  previous: string | null;
  next: string | null;
  results: Conversation[];
};

type QueryArgs = CommonQueryArgs & {
  data?: void | ConvResults | undefined;
};

type Result = AxiosResponse<string | unknown> & { data: ConvResults };

export default function MessagesPage(): JSX.Element {
  const user = getUser();

  // To-do replace with proper component and connection button
  if (!user) {
    return "connectez-vous !";
  }

  const [currentConv, setCurrentConv] = useState();

  const { error, isLoading, refetch, data, isPreviousData }: QueryArgs =
    useQuery({
      queryKey: ["conversations"],
      queryFn: async () => {
        const data: ConvResults | void = await axios
          .get(`conversations?current_user_id=${user?.id}`)
          .then((res: Result) => res.data)
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
        return data;
      },
      keepPreviousData: true
    });

  const hasResults = data?.results?.length;

  return (
    <S.Wrapper>
      {isLoading && "...Loading"}
      {!isLoading && hasResults && (
        <>
          <S.PreviewWrapper>
            <PreviewSection
              conversations={data?.results}
              setCurrentConv={setCurrentConv}
            />
          </S.PreviewWrapper>
          <S.ConvWrapper>
            <Conversation currentConv={currentConv} />
          </S.ConvWrapper>
        </>
      )}
      {!isLoading && !hasResults && "You don't have any conversation yet"}
    </S.Wrapper>
  );
}
