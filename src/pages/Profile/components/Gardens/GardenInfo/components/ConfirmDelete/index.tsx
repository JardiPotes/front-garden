import { useMutation, useQueryClient } from "react-query";
import useToken from "../../../../../../../hooks/useToken";
import { axios } from "../../../../../../../ClientProvider";
import * as S from "./styles";
import { Button } from "../../../../../../../components/Button";
import { ButtonWordings } from "../../../../../../../assets/wordings";
import { useParams } from "react-router-dom";

export const ConfirmDelete = ({ setIsOpen, gardenId }) => {
  const { token } = useToken();
  const queryClient = useQueryClient();
  const { id: userId } = useParams();

  const { mutate: deleteGarden } = useMutation(
    async () =>
      axios
        .delete(`gardens/${gardenId}`, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.setQueryData(["user", userId], (old) => ({
          ...old,
          data: {
            ...old.data,
            gardens: old.data.gardens.filter(
              (garden) => garden.id !== gardenId
            ),
          },
        }));
        setIsOpen(false);
      },
    }
  );

  return (
    <S.AlertBox onClick={(): void => setIsOpen(false)}>
      <S.AlertContent onClick={(e): void => e.stopPropagation()}>
        <p>Attention, cette opération n'est pas réversible !</p>
        <Button onClick={deleteGarden}>{ButtonWordings.confirmDelete}</Button>
      </S.AlertContent>
    </S.AlertBox>
  );
};
