import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../../../../components/Buttons";
import { Search, SearchInput, Wrapper } from "./styles";

type SearchBarProps = {
  setSearch: React.Dispatch<
    React.SetStateAction<Record<string, string> | null>
  >;
};

type SearchDate = {
  zipcode: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ setSearch }) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSearch: SubmitHandler<SearchDate> = (data) => {
    setSearch(data);
  };

  return (
    <Wrapper>
      <Search>
        <SearchInput {...register("zipcode")} placeholder="search by zipcode" />
        <Button onClick={handleSubmit(onSearch)}>Filtrer</Button>
        <Button
          onClick={(): void => {
            setSearch(null);
            setValue("zipcode", null);
          }}
        >
          Clear Filters
        </Button>
      </Search>
    </Wrapper>
  );
};
