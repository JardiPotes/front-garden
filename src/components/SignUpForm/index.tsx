import { useState, useEffect } from "react";
import * as S from "../SignUpForm/styles";
import Logo from "../../assets/jardi-logo-trans.png";
import CrossIcon from "../../assets/cross-icon.png";
import { Button } from "../Buttons";
import { ModalFormWordings, ButtonWordings } from "../../wordings";

import axios from "../../ClientProvider/axiosConfig";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

type SignUpModalProps = {
  isCompleted: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  password: string;
};

export const SignUpModal = ({
  isCompleted,
  setIsOpen,
  email,
  password,
}: SignUpModalProps) => {
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [hasGarden, setHasGarden] = useState("");

  const [createUserResult, setCreateUserResult] = useState<string | null>(null);

  const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isCreataingUser, mutate: createUser } = useMutation(
    async () => {
      return await axios.post(`/register`, {
        email,
        password,
        nickname,
        profileImage,
        bio,
        hasGarden,
      });
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status,
          headers: res.headers,
          data: res.data,
        };
        setCreateUserResult(formatResponse(result));
      },
      onError: (err: AxiosError) => {
        console.dir({ err });
        setCreateUserResult(formatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isCreataingUser) setCreateUserResult("creating...");
  }, [isCreataingUser]);

  const postData = () => {
    try {
      createUser();
    } catch (err) {
      setCreateUserResult(formatResponse(err));
    }
  };

  if (!isCompleted) return null;
  return (
    isCompleted && (
      <S.Modal>
        <S.ModalHeader>
          <S.LogoTitleWrapper>
            <S.Logo>
              <img src={Logo} />
            </S.Logo>
            <S.Title>{ModalFormWordings.headline}</S.Title>
          </S.LogoTitleWrapper>
          <S.Cross onClick={() => setIsOpen(false)}>
            <img src={CrossIcon} />
          </S.Cross>
        </S.ModalHeader>
        <S.HeaderUnderLine></S.HeaderUnderLine>
        <S.ModalBodyWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.pseudo}</S.inputLabel>
            <S.ModalBodyInputBody
              placeholder="Huguette-JMiche"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </S.labelInputWrapper>
          <S.labelInputWrapper>
            <S.inputLabel>{ModalFormWordings.bio}</S.inputLabel>
            <S.ModalBodyTextAreaBody
              placeholder="J'aimerais bien vous inviter à faire une raclette dans mon jardin situé Paris 16ème arrondissement quand il fait 50 degrés."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </S.labelInputWrapper>

          <S.hasGardenWrapper>
            <S.inputLabel>{ModalFormWordings.haveGarden}</S.inputLabel>
            <S.inputLabel>oui</S.inputLabel>
            <S.hasGardenInput
              type="radio"
              name="hasGarden"
              id="oui"
              value="true"
              onChange={(e) => setHasGarden(e.target.value)}
            />
            <S.inputLabel>non</S.inputLabel>
            <S.hasGardenInput
              type="radio"
              name="hasGarden"
              id="non"
              value="false"
              onChange={(e) => setHasGarden(e.target.value)}
            />
          </S.hasGardenWrapper>
          <Button onClick={postData}>{ButtonWordings.join}</Button>
        </S.ModalBodyWrapper>
      </S.Modal>
    )
  );
};
