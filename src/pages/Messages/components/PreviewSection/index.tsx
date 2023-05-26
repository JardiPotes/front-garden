import MessagePreview from "../Preview";

export default function PreviewSection({
  conversations,
  setSelectedConv
}): JSX.Element {
  return (
    <>
      {conversations.map((conversation, index) => (
        <MessagePreview
          key={`conv${index}`}
          message={conversation}
          setSelectedConv={setSelectedConv}
        />
      ))}
    </>
  );
}
