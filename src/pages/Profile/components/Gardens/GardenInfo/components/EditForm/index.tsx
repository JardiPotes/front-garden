import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

import { axios } from "../../../../../../../ClientProvider";
import { Modal } from "../../../../../../../components/Modal";
import useToken from "../../../../../../../hooks/useToken";
import { Garden } from "../../../../..";
import { getUser } from "../../../../../../../utils/user";

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
    async (data: Exclude<Garden, "id">) =>
      axios
        .put(
          `gardens/${gardenId}`,
          { ...data, user_id: user.id },
          {
            headers: { Authorization: `Token ${token}` },
          }
        )
        .then((res) => res.data),
    {
      onSuccess: (_, updatedVariables) => {
        queryClient.setQueryData(["user", user.id.toString()], (old) => ({
          ...old,
          data: {
            ...old.data,
            gardens: old.data.gardens.map((garden) =>
              garden.id === gardenId
                ? { ...garden, ...updatedVariables }
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
        <label htmlFor="title">
          <>Nom : </>
          <input
            type="text"
            id="title"
            {...register("title")}
            defaultValue={title}
          />
        </label>
        <label htmlFor="description">
          <>Description : </>
          <textarea
            id="description"
            {...register("description")}
            defaultValue={description}
          />
        </label>
        <label htmlFor="zipcode">
          <>Description : </>
          <textarea
            id="zipcode"
            {...register("zipcode")}
            defaultValue={zipcode}
          />
        </label>
        <input type="submit" />
        <input type="reset" />
      </form>
    </Modal>
  );
};
