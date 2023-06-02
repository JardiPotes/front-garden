import { useEffect } from "react";
import { useQuery } from "react-query";

import { axios } from "../../../../ClientProvider";
import { getUser } from "../../../../utils/user";
import * as S from "./styles";

export default function MessagePreview({
  conversation,
  setCurrentConv
}): JSX.Element {
  const user = getUser();
  console.debug(conversation);
  const contactId =
    conversation?.chat_sender_id === user.id
      ? conversation?.chat_receiver_id
      : conversation?.chat_sender_id;

  const {
    error,
    isLoading,
    refetch,
    data: contact,
    isPreviousData
  } = useQuery({
    queryKey: ["contact"],
    queryFn: async () => {
      const data = await axios
        .get(`users/${contactId}`)
        .then((res) => res.data)
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
      return data;
    },
    keepPreviousData: true
  });

  const handleClick = () => {
    setCurrentConv(contact);
  };

  useEffect(() => {
    setCurrentConv(contact);
  }, [contact]);

  return (
    <S.PrewiewItem to={`/messages/${conversation?.id}`} onClick={handleClick}>
      <S.Name>{contact?.nickName || "no name"}</S.Name>
      <S.MessagePreview>
        {conversation?.latest_message?.content || "no message yet"}
      </S.MessagePreview>
    </S.PrewiewItem>
  );
}
