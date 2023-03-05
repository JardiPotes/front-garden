import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";

import axios from "../../ClientProvider/axiosConfig";
import { GardenBanner } from "./components/Banner";
import { SearchBar } from "./components/Search";
import { GardenThumb } from "./components/Thumb";
import { PageButton } from "./styles";

export type Garden = {
  id: number;
  user_id: number;
  title: string;
  description?: string;
  address: string;
  zipcode: number;
  image?: string;
  user_image?: string;
};

type GardenData = {
  count: number;
  next?: URL | null;
  previous?: URL | null;
  results: Garden[];
};

type QueryArgs = {
  error?: AxiosError | null;
  isLoading?: boolean;
  data?: void | GardenData | undefined;
  isPreviousData: boolean;
  refetch: () => void;
};

type Result = AxiosResponse<string | unknown> & { data: GardenData };

export const GardenPage: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState<Record<string, string> | null>(null);

  const paramsString: string = useMemo(() => {
    if (search) {
      return Object.entries(search).reduce(
        (prev: string, [key, value]: string[]) => {
          return `${prev}${key}=${value}&`;
        },
        ""
      );
    } else {
      return "";
    }
  }, [search]);

  const { error, isLoading, refetch, data, isPreviousData }: QueryArgs =
    useQuery({
      queryKey: ["gardens", offset],
      queryFn: async () => {
        const data: GardenData | void = await axios
          .get(`gardens?offset=${offset}&${paramsString}`)
          .then((res: Result): GardenData => res.data)
          // eslint-disable-next-line no-console
          .catch((err: AxiosError) => console.log(err));
        return data;
      },
      keepPreviousData: true,
    });

  useEffect(() => {
    refetch();
  }, [search]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <GardenBanner />
      <SearchBar setSearch={setSearch} />
      <div>
        {data?.results.map((result) => (
          <GardenThumb key={result.id} garden={result} />
        ))}
      </div>
      {data?.next && !isPreviousData && (
        <PageButton onClick={(): void => setOffset(offset + 2)}>
          Page suivante
        </PageButton>
      )}
      {data?.previous && (
        <PageButton onClick={(): void => setOffset(offset - 2)}>
          Page précédente
        </PageButton>
      )}
    </>
  );
};
