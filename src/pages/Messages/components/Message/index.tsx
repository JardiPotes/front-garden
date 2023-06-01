import { getUser } from "../../../../utils/user";
import { Name } from "../Preview/styles";
import * as S from "./styles";

export const Message = ({ message, currentConv }) => {
  const user = getUser();
  const date = new Date(Date.parse(message.sent_at));
  console.log(date);
  const hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const isFromUser = message?.sender_id === user?.id;
  const author = isFromUser ? user?.nickname : currentConv?.nickname;

  return (
    <>
      <S.Bubble $right={isFromUser}>
        <S.Content>{message.content}</S.Content>
        <S.Date>{`${date.toLocaleDateString(
          "fr"
        )} à ${hours}h:${minutes}`}</S.Date>
      </S.Bubble>
      <Name>{author}</Name>
    </>
  );
};
