export default function MessagePreview({
  message,
  setSelectedConv
}): JSX.Element {
  return (
    <div onClick={(): void => setSelectedConv(message.id)}>
      <div>{message.sender}</div>
      <div>{message.preview}</div>
    </div>
  );
}
