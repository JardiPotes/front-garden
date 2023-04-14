import {
  faCircleXmark,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FC, useState } from "react";

import { Input, StyledInput } from "./styles";

export const SearchBar: FC = () => {
  const [text, setText] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };
  const clearInput = (): void => {
    setText("");
  };

  return (
    <form>
      <StyledInput className={"inputWithIcon"}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="left-icon" />
        <Input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Rechercher"
          onSubmit={(e): void => {
            e.preventDefault();
          }}
        />
        <button className="right-icon" onClick={clearInput}>
          <FontAwesomeIcon icon={faCircleXmark} size="lg" />
        </button>
      </StyledInput>
    </form>
  );
};
