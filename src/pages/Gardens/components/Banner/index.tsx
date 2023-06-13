import { GardenPageWordings } from "../../../../assets/wordings";
import { Banner } from "./styles";

export const GardenBanner: React.FC = () => {
  return (
    <Banner>
      <h1>{GardenPageWordings.title} </h1>
    </Banner>
  );
};
