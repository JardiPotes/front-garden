import axios from "../../ClientProvider/axiosConfig";
import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import { GardenBanner } from "./components/Banner";
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
};

type Result = AxiosResponse<string | unknown> & { data: GardenData };

export const GardenPage: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { error, isLoading, data, isPreviousData }: QueryArgs = useQuery({
    queryKey: ["gardens", offset],
    queryFn: async () => {
      const data: GardenData | void = await axios
        .get(`gardens?offset=${offset}`)
        .then((res: Result): GardenData => res.data)
        // eslint-disable-next-line no-console
        .catch((err: AxiosError) => console.log(err));
      return data;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <GardenBanner />
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
