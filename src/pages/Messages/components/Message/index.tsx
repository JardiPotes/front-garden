import { Name } from "../Preview/styles";
import * as S from "./styles";

export const Message = ({ message }) => {
  const user = "bidule";
  const date = new Date(Date.parse(message.sent_at));
  console.log(date);
  const hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return (
    <>
      <S.Bubble $right={message.author === user}>
        <S.Content>{message.content}</S.Content>
        <S.Date>{`${date.toLocaleDateString(
          "fr"
        )} à ${hours}h:${minutes}`}</S.Date>
      </S.Bubble>
      <Name>{message.author}</Name>
    </>
  );
};
