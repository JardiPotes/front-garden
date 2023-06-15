import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

import { axios } from "../../../../../ClientProvider";
import { Modal } from "../../../../../components/Modal";
import * as S from "../../../../../components/Modal/styles";
import useToken from "../../../../../hooks/useToken";
import { getUser } from "../../../../../utils/user";
import { UserInfoProps } from "..";
import { CenterElement } from "../../Gardens/CreateForm/styles";
import { Button } from "../../../../../components/Button";

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
        <S.FormWrapper>
          <S.labelInputWrapper>
            <S.inputLabel htmlFor="nickname">Pseudonyme : </S.inputLabel>
            <S.ModalBodyInputBody
              type="text"
              id="nickname"
              {...register("nickname")}
              defaultValue={nickname}
              required
            />
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel htmlFor="bio">Description : </S.inputLabel>
            <S.ModalBodyTextAreaBody
              {...register("bio")}
              defaultValue={bio}
              required
            />
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel htmlFor="experience">Expérience : </S.inputLabel>
            <S.ModalBodyInputBody
              type="number"
              {...register("experience")}
              defaultValue={experience}
              required
              min={0}
              max={5}
            />
          </S.labelInputWrapper>
          <CenterElement flexDirection="row">
            <Button type="submit">SOUMETTRE</Button>
            <Button type="reset">RÉINITIALISER</Button>
          </CenterElement>
        </S.FormWrapper>
      </form>
    </Modal>
  );
};
