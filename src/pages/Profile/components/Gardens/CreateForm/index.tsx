import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import axios from "../../../../../ClientProvider/axiosConfig";
import { Button } from "../../../../../components/Buttons";
import { Modal } from "../../../../../components/Modal";
import * as S from "../../../../../components/Modal/styles";
import { getUser } from "../../../../../utils/user";
import useToken from "../../../../../utils/useToken";
import { ButtonWordings, ModalFormWordings } from "../../../../../wordings";
import { CenterElement } from "./styles";
import { Uploader } from "./uploader";
const MandatoryField: React.FC = () => {
  return <div>Ce champ est obligatoire !</div>;
};

type CreateFormProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type GardenData = {
  user_id: string;
  title: string;
  description?: string;
  zipcode: string;
  garden_image?: File[] | FileList;
};

type PhotosData = {
  gardenId: string;
  photos: File[] | FileList;
};

export const CreateGardenForm: React.FC<CreateFormProps> = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<GardenData>();

  const [createGardenResult, setCreateGardenResult] = useState<
    Record<string, string | null>
  >({ status: null, message: "" });

  const formatResponse = (res: unknown): string => {
    return JSON.stringify(res, null, 2);
  };
  const { token } = useToken();
  const postData: SubmitHandler<GardenData> = (data) => {
    try {
      createGarden(data);
    } catch (err) {
      setCreateGardenResult({ status: "error", message: formatResponse(err) });
    }
  };

  const {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: gardenId,
    isLoading: isCreatingGarden,
    mutate: createGarden,
  } = useMutation(
    async (data: GardenData) => {
      const user = getUser();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-console
      user ? (data.user_id = user.id) : console.log("No User");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return await axios
        .post(`/gardens`, data, {
          headers: {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            Authorization: `Token ${token}`,
          },
        })
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        .then((res) => res.data.id);
    },
    {
      onError: (err: AxiosError) => {
        // eslint-disable-next-line no-console
        console.dir({ err });
        const errMessage = formatResponse(err?.response?.data);
        setCreateGardenResult({
          status: "error",
          message: `Oups, il y a un problème : ${errMessage}`,
        });
      },
    }
  );

  const { isLoading: isUploadingPhoto, mutate: uploadPhoto } = useMutation(
    async (data: PhotosData) => {
      return await axios.post(
        `/photos`,
        { garden_id: data.gardenId, image: data.photos[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            Authorization: `Token ${token}`,
          },
        }
      );
    },
    {
      onSuccess: () => {
        setIsOpen(false);
      },
    }
  );

  useEffect(() => {
    if (isCreatingGarden)
      setCreateGardenResult({ status: "creating", message: "...creating" });
  }, [isCreatingGarden]);

  useEffect(() => {
    const photos = getValues("garden_image");
    if (photos?.length) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      uploadPhoto({ gardenId, photos });
    }
  }, [gardenId]);

  return (
    <Modal setIsOpen={setIsOpen}>
      <form>
        <S.FormWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.title}</S.inputLabel>
            <S.ModalBodyInputBody
              placeholder="Chez Jade"
              {...register("title", { required: true })}
            />
            {errors.title && <MandatoryField />}
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.description}</S.inputLabel>
            <S.ModalBodyInputBody
              placeholder="Décrire ton jardin en quelques mots"
              {...register("description", { required: true })}
            />
            {errors.description && <MandatoryField />}
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.zipcode}</S.inputLabel>
            <S.ModalBodyInputBody
              placeholder="75000"
              {...register("zipcode", { required: true })}
            />
            {errors.zipcode && <MandatoryField />}
          </S.labelInputWrapper>
          <Uploader register={register} />
          <CenterElement>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <Button onClick={handleSubmit(postData)}>
              {ButtonWordings.createGarden}
            </Button>
            {createGardenResult.status && createGardenResult.message}
          </CenterElement>
        </S.FormWrapper>
      </form>
    </Modal>
  );
};
