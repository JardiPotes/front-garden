import {AxiosError, AxiosResponse} from 'axios';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useMutation, useQuery} from 'react-query';

import {axios} from '../../../../ClientProvider';
import {Button} from '../../../../components/Button';
import {CommonQueryArgs} from '../../../../types';
import {getUser, User} from '../../../../utils/user';
import {Message as MessageType} from '../..';
import {Message} from '../Message';
import * as S from './styles';
import {CenterElement} from '../../../../components/SignUpForm/styles';

type ConvResults = {
  messages: MessageType[];
};

type QueryArgs = CommonQueryArgs & {
  data?: void | ConvResults | undefined;
};

type Result = AxiosResponse<string | unknown> & {data: ConvResults};

type CreateMessageArgs = {
  message: string;
};

type ConversationProps = {
  currentConv?: void | Partial<User>;
  convId: string | undefined;
};

export default function Conversation({
  currentConv,
  convId,
}: ConversationProps): JSX.Element {
  // replaces with api call to retrieve conv with id
  const user = getUser();
  const {register, handleSubmit, setValue} = useForm<CreateMessageArgs>();

  if (!convId) {
    return <div> Nous n'avons pas trouvé cette conversation</div>;
  }

  const {refetch, data}: QueryArgs = useQuery({
    queryKey: ['conversation'],
    queryFn: async () => {
      const data: ConvResults | void = await axios
        .get(`conversations/${convId}?current_user_id=${String(user?.id)}`)
        .then((res: Result) => res.data)
        // eslint-disable-next-line no-console
        .catch((err: AxiosError) => console.log(err));
      return data;
    },
    keepPreviousData: true,
    refetchInterval: 30000,
  });

  useEffect(() => {
    refetch();
  }, [convId, currentConv]);

  const {mutate: createMessage} = useMutation(
    async (data: CreateMessageArgs) => {
      return await axios.post(`messages`, {
        conversation_id: convId,
        sender_id: user?.id,
        content: data.message,
      });
    },
    {
      onSuccess: () => {
        refetch();
        setValue('message', '');
      },
      onError: (err: AxiosError) => {
        // eslint-disable-next-line no-console
        console.dir({err});
      },
    },
  );

  const postData = (data: CreateMessageArgs): void => {
    try {
      createMessage(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <>
      <CenterElement>
        Vos échanges avec {currentConv?.nickname || 'utilisateur sans nom'}
      </CenterElement>
      {data?.messages?.length ? (
        <>
          {data.messages.map((message, index) => (
            <S.MessageWrapper
              key={`messages${index}`}
              $right={String(message?.sender_id) === String(user?.id)}>
              <Message message={message} currentConv={currentConv} />
            </S.MessageWrapper>
          ))}
        </>
      ) : (
        <div data-test-id="no_message">pas encore de message ici !</div>
      )}
      <form>
        <S.MessageArea
          {...register('message', {required: true})}
          id="message_input"
        />
        <CenterElement>
          <Button // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleSubmit(postData)}
            data-test-id="message_submit">
            {'envoyer'}
          </Button>
        </CenterElement>
      </form>
    </>
  );
}
