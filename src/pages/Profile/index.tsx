import { FC } from "react";
import { CommentSection } from "./components/CommentSection";
import { Gardens } from "./components/Gardens";

import { UserInfo } from "./components/UserInfo";
import * as S from "./styles";

const { gardens, ...user } = {
  id: 3,
  //"email": "6a57cbe9-05ef-4576-b4cd-2b5d90eac6d7@test.com",
  nickname: "Mylène Farmer",
  bio: "J’ai un grand jardin en plein 20ème arrondissement. Face au réchauffement climatique, je propose mon jardin à des gens désenchantés qui ont la main verte, afin de sauver la planète !",
  has_garden: true,
  gardens: [
    {
      id: 1,
      //user_id: 3,
      title: "Mylène's Farm",
      description:
        'Invitation à tous les amoureux de la nature ! Venez jardiner avec moi dans mon jardin, comme dans "Libertine" nous pourrons cultiver des légumes et des fleurs ensemble. Nous pourrons échanger des astuces et des histoires comme dans "Ainsi soit je", et passer du temps de qualité en extérieur comme dans "Pourvu qu\'elles soient douces". Rejoignez-moi pour cette expérience unique.',
      //address: "Paris 20ème",
      zipcode: "75020",
      photos: [
        {
          image:
            "https://meet-thelocals.com/wp-content/uploads/2019/10/parc-monceau-paris-beautiful-see-bridge.jpg",
        },
      ],
    },
  ],
  profile_image:
    "https://c-cl.cdn.smule.com/rs-s24/arr/51/ea/bc9174de-a1cd-4055-a7f9-edba45812609_256.jpg",
  //auth_token: null,
  experience: 3,
};

export const Profile: FC = () => (
  <S.Layout>
    <UserInfo user={user} />
    <Gardens gardens={gardens} />
    <CommentSection />
  </S.Layout>
);
