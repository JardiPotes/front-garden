import { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import styled from "styled-components";

import { axios } from "../../../../../ClientProvider";
import { Button } from "../../../../../Components/Button";
import { getUser } from "../../../../../utils/user";
import useToken from "../../../../../hooks/useToken";

interface CommentFormProps {
  userId: string;
  triggerRefetch: () => void;
}

const CommentForm: FC<CommentFormProps> = ({ userId, triggerRefetch }) => {
  const { register, handleSubmit } = useForm<{ comment: string }>();

  const { token } = useToken();
  const author = getUser();

  const { mutate: postNewComment } = useMutation(
    async (content: string) =>
      axios
        .post(
          "comments",
          { author_id: author?.id, receiver_id: userId, content },
          {
            headers: { Authorization: `Token ${token}` }
          }
        )
        .then((res) => res.data),
    { onSuccess: triggerRefetch }
  );

  const onSubmit = (data: { comment: string }): void => {
    postNewComment(data.comment);
  };

  return (
    author && (
      <form // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="comment">Ajouter un commentaire :</label>
        <textarea
          {...register("comment")}
          id="comment"
          rows={5}
          required
          minLength={10}
          maxLength={2_000}
        />
        <Button type="submit">Soumettre</Button>
      </form>
    )
  );
};

const Colors = {
  cardBackground: "#FCF9F9",
  focus: "#CEA37C"
} as const;

const CommentFormStyleWrapper = styled.div`
  margin: 1em;
  width: clamp(200px, 100%, 750px);

  & form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  & textarea {
    box-sizing: border-box;
    border: none;
    width: 100%;
    margin: 0;
    background-color: ${Colors.cardBackground};
    border-radius: 20px;
    padding: 20px;
  }

  & button {
    align-self: center;
    margin: 0;
  }
`;

export const StyledCommentForm: FC<CommentFormProps> = ({
  userId,
  triggerRefetch
}) => (
  <CommentFormStyleWrapper>
    <CommentForm userId={userId} triggerRefetch={triggerRefetch} />
  </CommentFormStyleWrapper>
);
