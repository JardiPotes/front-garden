import {getUser, User} from '../../../../utils/user';
import {Name} from '../Preview/styles';
import * as S from './styles';

type MessageProps = {
  message: {
    id: number;
    sender_id: number;
    content: string;
    sent_at: string;
  };
  currentConv?: void | Partial<User>;
};

export const Message: React.FC<MessageProps> = ({message, currentConv}) => {
  const user = getUser();
  const date = new Date(Date.parse(message.sent_at));
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let minutesStr = minutes.toString();
  if (minutes < 10) {
    minutesStr = '0' + minutesStr;
  }

  const isFromUser = String(message?.sender_id) === String(user?.id);
  const author = isFromUser ? user?.nickname : currentConv?.nickname;

  return (
    <>
      <S.Bubble $right={isFromUser}>
        <S.Content data-test-id="message_content">{message.content}</S.Content>
        <S.Date>{`${date.toLocaleDateString(
          'fr',
        )} à ${hours}h:${minutesStr}`}</S.Date>
      </S.Bubble>
      <Name>{author}</Name>
    </>
  );
};
