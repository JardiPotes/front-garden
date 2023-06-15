import { useForm } from "react-hook-form";

import { axios } from "../../../../../ClientProvider";
import { Modal } from "../../../../../components/Modal";
import useToken from "../../../../../hooks/useToken";
import { getUser } from "../../../../../utils/user";
import { UserInfoProps } from "..";
import { useMutation, useQueryClient } from "react-query";

export const EditForm = ({ setIsOpen, nickname, experience, bio }) => {
  const { register, handleSubmit } = useForm<UserInfoProps["user"]>();

  const user = getUser();
  const { token } = useToken();

  const queryClient = useQueryClient();
  const { mutate: editUserInfo } = useMutation(
    async (data: UserInfoProps["user"]) =>
      axios
        .put(`users/${user.id}`, data, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => res.data),
    {
      onSuccess: (_, updatedVariables) => {
        queryClient.setQueryData(["user", user?.id.toString()], (old) => ({
          ...old,
          data: { ...old.data, ...updatedVariables },
        }));
        setIsOpen(false);
      },
    }
  );

  return (
    <Modal setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(editUserInfo)}>
        <label htmlFor="nickname">
          <>Pseudonyme: </>
          <input
            type="text"
            id="nickname"
            {...register("nickname")}
            defaultValue={nickname}
          />
        </label>
        <label htmlFor="bio">
          <>Description: </>
          <textarea id="bio" {...register("bio")} defaultValue={bio} />
        </label>
        <label htmlFor="experience">
          <>Expérience: </>
          <input
            type="number"
            id="experience"
            {...register("experience")}
            defaultValue={experience}
            min={0}
            max={5}
          />
        </label>
        <input type="submit" />
        <input type="reset" />
      </form>
    </Modal>
  );
};
