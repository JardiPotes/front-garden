import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

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
  const { convId } = useParams();
  const navigate = useNavigate();

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
  const firstConv = data?.results[0]?.id;

  useEffect(() => {
    if (convId === "0" && firstConv) {
      navigate(`../messages/${firstConv}`);
    }
  }, [convId, firstConv]);

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
            <Conversation currentConv={currentConv} convId={convId} />
          </S.ConvWrapper>
        </>
      )}
      {!isLoading && !hasResults && "You don't have any conversation yet"}
    </S.Wrapper>
  );
}
