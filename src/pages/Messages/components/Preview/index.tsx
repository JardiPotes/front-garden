import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom';

import {axios} from '@/ClientProvider';
import {RoundImage} from '@/components/Header/styles';
import {LogoTitleWrapper} from '@/components/Header/styles';
import {getUser, User} from '@/utils/user';

import * as S from './styles';

type MessagePreviewProps = {
  conversation: {
    id: number;
    chat_sender_id: number;
    chat_receiver_id: number;
    latest_message: {
      id: number;
      content: string;
    };
  };
  setCurrentConv: React.Dispatch<
    React.SetStateAction<void | Partial<User> | undefined>
  >;
};

export const MessagePreview: React.FC<MessagePreviewProps> = ({
  conversation,
  setCurrentConv,
}) => {
  const {convId} = useParams();
  const user = getUser();
  const contactId =
    conversation.chat_sender_id == user?.id
      ? conversation.chat_receiver_id
      : conversation.chat_sender_id;

  const {data: contact} = useQuery({
    queryKey: [`contact_${conversation.id}`],
    queryFn: async () => {
      const data = await axios
        .get<User>(`users/${contactId}`)
        .then(res => res.data)
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
      return data;
    },
  });

  const handleClick = (): void => {
    setCurrentConv(contact);
  };

  useEffect(() => {
    if (convId === String(conversation?.id)) {
      setCurrentConv(contact);
    }
  }, [contact, convId]);

  return (
    <S.PrewiewItem to={`/messages/${conversation?.id}`} onClick={handleClick}>
      <LogoTitleWrapper>
        {contact?.profile_image && <RoundImage src={contact.profile_image} />}
        <S.Name>{contact?.nickname || 'no name'}</S.Name>
      </LogoTitleWrapper>
      <S.MessagePreview>
        {conversation?.latest_message?.content || 'no message yet'}
      </S.MessagePreview>
    </S.PrewiewItem>
  );
};
