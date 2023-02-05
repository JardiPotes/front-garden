import { useState } from "react";

import UploadIcon from "../../assets/upload-icon.png";
import * as S from "./styles";

export const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | MouseEvent>
  ) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmit = () => {
    if (isFilePicked) {
      const formData = new FormData();
      formData.append("File", selectedFile);
      console.log("success", formData.get("File"));
      //   fetch(
      //     "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
      //     {
      //       method: "POST",
      //       body: formData,
      //     }
      //   )
      //     .then((response) => response.json())
      //     .then((result) => {
      //       console.log(result);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
    }
  };

  return (
    <>
      <input name="file" type="file" onChange={handleChange} />
      <S.UploadButton onClick={handleSubmit}>
        <img src={UploadIcon} />
      </S.UploadButton>
    </>
  );
};
