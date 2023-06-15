import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

import { ButtonWordings } from "../../../../../../../assets/wordings";
import { axios } from "../../../../../../../ClientProvider";
import { Button } from "../../../../../../../components/Button";
import { Cross } from "../../../../../../../components/Modal/styles";
import useToken from "../../../../../../../hooks/useToken";
import CrossIcon from "../../../../../../../assets/cross-icon.png";
import * as S from "./styles";
import { TransparentButton } from "../../../../../../../components/Button/TransparentButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <TransparentButton
          style={{ alignSelf: "end" }}
          onClick={(): void => setIsOpen(false)}
        >
          <S.Icon src={CrossIcon} />
        </TransparentButton>
        <p>Attention, cette opération n'est pas réversible !</p>
        <Button onClick={deleteGarden}>{ButtonWordings.confirmDelete}</Button>
      </S.AlertContent>
    </S.AlertBox>
  );
};
