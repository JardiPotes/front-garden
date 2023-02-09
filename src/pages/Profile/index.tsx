import { FC } from "react";

import { UserInfo } from "./components/UserInfo";
import * as S from "./styles";

const data = {
  user: {
    profileImage:
      "https://c-cl.cdn.smule.com/rs-s24/arr/51/ea/bc9174de-a1cd-4055-a7f9-edba45812609_256.jpg",
    location: "Paris 20ème",
    nickname: "Mylène Farmer",
    experience: 3,
    bio: "J’ai un grand jardin en plein 20ème arrondissement. Face au réchauffement climatique, je propose mon jardin à des gens désenchantés qui ont la main verte, afin de sauver la planète !",
  },
};

export const Profile: FC = () => (
  <S.Layout>
    <UserInfo user={data.user} />
  </S.Layout>
);
