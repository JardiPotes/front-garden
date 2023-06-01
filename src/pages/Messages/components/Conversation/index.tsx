import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { axios } from "../../../../ClientProvider";
import { Button } from "../../../../components/Buttons";
import { CommonQueryArgs } from "../../../../types";
import { getUser } from "../../../../utils/user";
import { Message as MessageType } from "../..";
import { Message } from "../Message";
import * as S from "./styles";
import { AxiosError, AxiosResponse } from "axios";

type ConvResults = {
  messages: MessageType[];
};

type QueryArgs = CommonQueryArgs & {
  data?: void | ConvResults | undefined;
};

type Result = AxiosResponse<string | unknown> & { data: ConvResults };

type CreateMessageArgs = {
  message: string;
};

type ConversationProps = {
  currentConv: {
    nickName?: string;
    avatar?: string;
  };
};

export default function Conversation({
  currentConv
}: ConversationProps): JSX.Element {
  // replaces with api call to retrieve conv with id
  const user = getUser();
  const { convId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { error, isLoading, refetch, data, isPreviousData }: QueryArgs =
    useQuery({
      queryKey: ["conversation"],
      queryFn: async () => {
        const data: ConvResults | void = await axios
          .get(`conversations/${convId}?current_user_id=${user.id}`)
          .then((res: Result) => res.data)
          // eslint-disable-next-line no-console
          .catch((err: AxiosError) => console.log(err));
        return data;
      },
      keepPreviousData: true
    });

  useEffect(() => {
    refetch();
  }, [convId]);

  const { isLoading: isCreatingMessage, mutate: createMessage } = useMutation(
    async (data: CreateMessageArgs) => {
      return await axios.post(`messages`, {
        conversation_id: convId,
        sender_id: user?.id,
        content: data.message
      });
    },
    {
      onSuccess: () => {
        refetch();
      },
      onError: (err: AxiosError) => {
        // eslint-disable-next-line no-console
        console.dir({ err });
      }
    }
  );

  const postData = (data: CreateMessageArgs): void => {
    try {
      createMessage(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        Vos échanges avec {currentConv?.nickName || "utilisateur sans nom"}
      </div>
      {!isLoading && data?.messages?.length ? (
        <>
          {data.messages.map((message, index) => (
            <S.MessageWrapper
              key={`messages${index}`}
              $right={message?.sender_id === user?.id}
            >
              <Message message={message} currentConv={currentConv} />
            </S.MessageWrapper>
          ))}
        </>
      ) : (
        <div>pas encore de message ici !</div>
      )}
      <form>
        <S.MessageArea {...register("message", { required: true })} />
        <Button onClick={handleSubmit(postData)}>{"envoyer"}</Button>
      </form>
    </>
  );
}
