import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

import { axios } from "../../../../../../../ClientProvider";
import { Modal } from "../../../../../../../components/Modal";
import * as S from "../../../../../../../components/Modal/styles";
import useToken from "../../../../../../../hooks/useToken";
import { Garden } from "../../../../..";
import { getUser } from "../../../../../../../utils/user";
import { CenterElement } from "../../../CreateForm/styles";
import { Button } from "../../../../../../../components/Button";

export const EditForm = ({
  setIsOpen,
  gardenId,
  title,
  description,
  zipcode,
  image,
}) => {
  const { register, handleSubmit } = useForm<Garden>();

  const user = getUser();
  const { token } = useToken();

  const queryClient = useQueryClient();
  const { mutate: editGarden } = useMutation(
    async (data: Exclude<Garden, "id">) => {
      return axios
        .put(
          `gardens/${gardenId}`,
          {
            ...data,
            user_id: user.id,
          },
          {
            headers: { Authorization: token && `Token ${token}` },
          }
        )
        .then((res) => res.data);
    },
    {
      onSuccess: (updatedData, updatedVariables) => {
        queryClient.setQueryData(["user", user.id.toString()], (old) => ({
          ...old,
          data: {
            ...old.data,
            gardens: old.data.gardens.map((garden) =>
              garden.id === gardenId
                ? {
                    ...garden,
                    ...updatedVariables,
                  }
                : garden
            ),
          },
        }));
        setIsOpen(false);
      },
    }
  );

  return (
    <Modal setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(editGarden)}>
        <S.FormWrapper>
          <S.labelInputWrapper>
            <S.inputLabel htmlFor="title">Nom : </S.inputLabel>
            <S.ModalBodyInputBody
              type="text"
              id="title"
              {...register("title")}
              defaultValue={title}
              required
            />
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel htmlFor="description">Description : </S.inputLabel>
            <S.ModalBodyTextAreaBody
              {...register("description")}
              defaultValue={description}
              required
            />
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel htmlFor="zipcode">Code postal : </S.inputLabel>
            <S.ModalBodyInputBody
              type="text"
              {...register("zipcode")}
              defaultValue={zipcode}
              required
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
