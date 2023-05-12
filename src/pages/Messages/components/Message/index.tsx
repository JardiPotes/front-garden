export const Message = ({ message }) => {
  return (
    <>
      <div>{message.content}</div>
      <div>{message.author}</div>
      <div>{message.timestamp}</div>
    </>
  );
};
