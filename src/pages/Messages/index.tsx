import { useQuery } from "react-query";

import { axios } from "../../ClientProvider";
import { getUser } from "../../utils/user";
import Conversation from "./components/Conversation";
import PreviewSection from "./components/PreviewSection";
import * as S from "./styles";

export default function MessagesPage(): JSX.Element {
  const user = getUser();

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

  console.log(data);
  // const conversations = data.results;

  return (
    <S.Wrapper>
      {!isLoading && (
        <>
          <S.PreviewWrapper>
            <PreviewSection conversations={data?.results} />
          </S.PreviewWrapper>
          <S.ConvWrapper>
            <Conversation />
          </S.ConvWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
