import axios from "../../ClientProvider/axiosConfig";
import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

type Garden = {
  address: string;
  description: string;
  id: number;
  title: string;
  user_id: number;
  zipcode: string;
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
};

type Result = AxiosResponse<string | unknown> & { data: GardenData };

export const GardenPage: React.FC = () => {
  const { error, isLoading, data }: QueryArgs = useQuery(
    "gardens",
    async () => {
      const data: GardenData | void = await axios
        .get(`gardens`)
        .then((res: Result): GardenData => res.data)
        // eslint-disable-next-line no-console
        .catch((err: AxiosError) => console.log(err));
      return data;
    }
  );

  // TO-DO : UI & pagination
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      {data?.results.map((result) => (
        <div key={`garden_${result.id}`}>{result.title}</div>
      ))}
    </div>
  );
};
