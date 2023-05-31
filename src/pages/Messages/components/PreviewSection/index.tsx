import MessagePreview from "../Preview";

export default function PreviewSection({ conversations }): JSX.Element {
  console.log("conv", conversations);
  return (
    <>
      {conversations?.map((conversation, index) => (
        <MessagePreview key={`conv${index}`} conversation={conversation} />
      ))}
    </>
  );
}
