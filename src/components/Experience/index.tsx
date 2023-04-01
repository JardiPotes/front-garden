import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import styled from "styled-components";

const ExperienceBase: FC<{
  experience: 1 | 2 | 3 | 4 | 5;
  wording?: string;
}> = ({ experience, wording }) => (
  <span>
    {wording && wording + " "}
    {Array.from({ length: experience }).map((_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faSeedling}
        bounce
        style={{ padding: "0.2ch", animationIterationCount: 1 }}
      />
    ))}
  </span>
);

export const Experience = styled(ExperienceBase)`
  margin: 0;
`;
