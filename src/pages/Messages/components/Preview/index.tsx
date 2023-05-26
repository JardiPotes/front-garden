import * as S from "./styles";

export default function MessagePreview({
  message,
  setSelectedConv
}): JSX.Element {
  return (
    <S.PrewiewItem onClick={(): void => setSelectedConv(message.id)}>
      <S.Name>{message.sender}</S.Name>
      <S.MessagePreview>{message.preview}</S.MessagePreview>
    </S.PrewiewItem>
  );
}
