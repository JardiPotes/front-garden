import { Name } from "../Preview/styles";
import * as S from "./styles";

export const Message = ({ message }) => {
  const user = "bidule";
  const date = new Date(message.timestamp);
  return (
    <>
      <S.Bubble $right={message.author === user}>
        <S.Content>{message.content}</S.Content>
        <S.Date>{`${date.toLocaleDateString(
          "fr"
        )} à ${date.getHours()}h:${date.getMinutes()}`}</S.Date>
      </S.Bubble>
      <Name>{message.author}</Name>
    </>
  );
};
