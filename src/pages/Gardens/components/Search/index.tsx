import { SubmitHandler, useForm } from "react-hook-form";
import useBreakpoint from "use-breakpoint";

import { Button } from "../../../../components/Buttons";
import { intentionallyFloatingPromiseReturn } from "../../../../utils/intentionallyFloatingPromiseReturn";
import { Search, SearchInput, Wrapper } from "./styles";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

type SearchBarProps = {
  setSearch: React.Dispatch<
    React.SetStateAction<Record<string, string | null> | null>
  >;
};

type SearchData = {
  zipcode: string | null;
};

export const SearchBar: React.FC<SearchBarProps> = ({ setSearch }) => {
  const { register, handleSubmit, setValue } = useForm<SearchData>();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const isMobile = breakpoint === "mobile";
  const onSearch: SubmitHandler<SearchData> = (data) => {
    setSearch(data);
  };

  return (
    <Wrapper>
      <Search>
        <SearchInput {...register("zipcode")} placeholder="search by zipcode" />
        <Button
          onClick={intentionallyFloatingPromiseReturn(handleSubmit(onSearch))}
          small={isMobile && true}
        >
          {isMobile ? <img src="public/images/search.png" /> : "Filter"}
        </Button>
        <Button
          onClick={(): void => {
            setSearch(null);
            setValue("zipcode", null);
          }}
          small={isMobile && true}
        >
          {isMobile ? <img src="public/images/refresh.png" /> : "Clear Filters"}
        </Button>
      </Search>
    </Wrapper>
  );
};
