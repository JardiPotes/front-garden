import { useState } from "react";
import { useQuery } from "react-query";

import { axios } from "../../ClientProvider";
import { getUser } from "../../utils/user";
import Conversation from "./components/Conversation";
import PreviewSection from "./components/PreviewSection";
import * as S from "./styles";

export default function MessagesPage(): JSX.Element {
  const user = getUser();
  const [currentConv, setCurrentConv] = useState();

  const { error, isLoading, refetch, data, isPreviousData }: QueryArgs =
    useQuery({
      queryKey: ["conversations"],
      queryFn: async () => {
        const data = await axios
          .get(`conversations?current_user_id=${user.id}`)
          .then((res) => res.data)
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
