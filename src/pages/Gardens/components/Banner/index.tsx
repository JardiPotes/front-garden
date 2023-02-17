import { Banner } from "./styles";
import { GardenPageWordings } from "../../../../wordings";

export const GardenBanner: React.FC = () => {
  return (
    <Banner>
      <h1>{GardenPageWordings.title} </h1>
    </Banner>
  );
};
