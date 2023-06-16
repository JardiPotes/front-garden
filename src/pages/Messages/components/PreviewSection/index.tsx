import {Conversation} from '../..';
import {MessagePreview} from '../Preview';

type PreviewSectionProps = {
  conversations: Conversation[];
  setCurrentConv: React.Dispatch<unknown>;
};

export default function PreviewSection({
  conversations,
  setCurrentConv,
}: PreviewSectionProps): JSX.Element {
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
