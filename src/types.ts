import {AxiosError} from 'axios';

export type CommonQueryArgs = {
  error?: AxiosError | null;
  isLoading?: boolean;
  isPreviousData?: boolean;
  refetch?: () => void;
};
