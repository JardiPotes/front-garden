import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { axios } from "../../../../ClientProvider";
import { Button } from "../../../../components/Buttons";
import { getUser } from "../../../../utils/user";
import { Message } from "../Message";
import { MessageWapper } from "./styles";

export default function Conversation(): JSX.Element {
  // replaces with api call to retrieve conv with id
  const user = getUser();
  const { convId } = useParams();
  console.log(convId);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { error, isLoading, refetch, data, isPreviousData }: QueryArgs =
    useQuery({
      queryKey: ["conversation"],
      queryFn: async () => {
        const data = await axios
          .get(`conversations/${convId}?current_user_id=${user.id}`)
          .then((res) => res.data)
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
        return data;
      },
      keepPreviousData: true
    });

  useEffect(() => {
    refetch();
  }, [convId]);

  const { isLoading: isCreatingMessage, mutate: createMessage } = useMutation(
    async (data) => {
      return await axios.post(`messages`, {
        conversation_id: convId,
        sender_id: user.id,
        content: data.message
      });
    },
    {
      onSuccess: (res) => {
        console.log("ok", res);
        refetch();
      },
      onError: (err) => {
        // eslint-disable-next-line no-console
        console.dir({ err });
      }
    }
  );

  console.log("1 conv", data);
  // const realConv = data.results;

  const postData = (data) => {
    try {
      console.log("data", data);
      createMessage(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!isLoading && data?.messages?.length
        ? data.messages.map((message, index) => (
            <MessageWapper
              key={`messages${index}`}
              $right={message?.sender_id === user?.id}
            >
              <Message message={message} />
            </MessageWapper>
          ))
        : "no messages yet"}
      <form>
        <textarea {...register("message", { required: true })} />
        <Button onClick={handleSubmit(postData)}>{"envoyer"}</Button>
      </form>
    </>
  );
}
