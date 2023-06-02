import MessagePreview from "../Preview";

export default function PreviewSection({
  conversations,
  setCurrentConv
}): JSX.Element {
  return (
    <>
      {conversations?.map((conversation, index) => (
        <MessagePreview
          key={`conv${index}`}
          conversation={conversation}
          setCurrentConv={setCurrentConv}
        />
      ))}
    </>
  );
}
