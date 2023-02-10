import { FC } from "react";
import { SectionHeader } from "../SectionHeader";
import { GardenInfo } from "./GardenInfo";

export interface Garden {
  id: number;
  title: string;
  description: string;
  zipcode: string;
  photos: { image: string }[];
}

interface GardensProps {
  gardens?: Garden[];
}

export const Gardens: FC<GardensProps> = ({ gardens }) => {
  if (!gardens || !gardens.length) return null;
  const sectionTitle = gardens.length > 1 ? "Mes jardins" : "Mon jardin";

  return (
    <>
      <SectionHeader>{sectionTitle}</SectionHeader>
      {gardens.map((garden) => (
        <GardenInfo key={`garden-${garden.id}`} garden={garden} />
      ))}
    </>
  );
};
