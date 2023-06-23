import {User} from '../../../../utils/user';
import {CenterElement} from '../../../Profile/components/Gardens/CreateForm/styles';
import {Conversation} from '../..';
import {MessagePreview} from '../Preview';

type PreviewSectionProps = {
  conversations: Conversation[];
  setCurrentConv: React.Dispatch<
    React.SetStateAction<void | Partial<User> | undefined>
  >;
};

export default function PreviewSection({
  conversations,
  setCurrentConv,
}: PreviewSectionProps): JSX.Element {
  return (
    <>
      <CenterElement>Vos conversations</CenterElement>
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
