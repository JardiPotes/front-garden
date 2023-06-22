import {faRotateRight} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SubmitHandler, useForm} from 'react-hook-form';
import useBreakpoint from 'use-breakpoint';

import {Button} from '../../../../components/Button';
import {BREAKPOINTS} from '../../../../GlobalStyles';
import {intentionallyFloatingPromiseReturn} from '../../../../utils/intentionallyFloatingPromiseReturn';
import {Search, SearchInput, Wrapper} from './styles';

type SearchBarProps = {
  setSearch: React.Dispatch<
    React.SetStateAction<Record<string, string> | null>
  >;
};

type SearchData = {
  zipcode?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({setSearch}) => {
  const {register, handleSubmit, setValue} = useForm<SearchData>();
  const {breakpoint} = useBreakpoint(BREAKPOINTS);

  const isMobile = breakpoint === 'mobile';
  const onSearch: SubmitHandler<SearchData> = data => {
    setSearch(data);
  };

  return (
    <Wrapper>
      <Search>
        <SearchInput
          {...register('zipcode')}
          placeholder="search by zipcode"
          data-test-id="zipcode"
        />
        <Button
          onClick={intentionallyFloatingPromiseReturn(handleSubmit(onSearch))}
          small={isMobile && true}
          data-test-id="search_submit">
          {isMobile ? <FontAwesomeIcon icon={faMagnifyingGlass} /> : 'Filtrer'}
        </Button>
        <Button
          onClick={(): void => {
            setSearch(null);
            setValue('zipcode', '');
          }}
          small={isMobile && true}>
          {isMobile ? (
            <FontAwesomeIcon icon={faRotateRight} />
          ) : (
            'Réinitialiser'
          )}
        </Button>
      </Search>
    </Wrapper>
  );
};
