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
    {
      id: 3,
      //user_id: 4,
      title: "Mylène's Urban Garden",
      description:
        "Calling all urban gardeners! Join me in my little oasis in the city, where we'll cultivate a variety of vegetables and flowers, just like in 'The Secret Garden.' We can share tips and stories while enjoying the fresh air and sunshine, just like in 'The Secret Life of Bees.' Let's spend a relaxing day surrounded by nature, just like in 'Into the Wild.' Come join me for this unique experience!",
      //address: "New York City",
      zipcode: "10001",
      photos: [
        {
          image:
            "https://i.etsystatic.com/10505270/r/il/c20410/1858961597/il_1588xN.1858961597_t9ne.jpg",
        },
      ],
    },
  ],
  profile_image:
    "https://c-cl.cdn.smule.com/rs-s24/arr/51/ea/bc9174de-a1cd-4055-a7f9-edba45812609_256.jpg",
  //auth_token: null,
  experience: 3,
};

const comments = [
  {
    id: 34,
    author: {
      nickname: "Lady Gaga",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTna2CPv8qHQBhMDLHGfquI4xoeTFTOA3Az0g&usqp=CAU",
      experience: 3,
    },
    content:
      "J’ai passé un sacré bon moment avec Mylène dans son petit jardin. Je me vois revenir la prochaine fois avec Emily car sa robe avec la Tour Eiffel était juste magnifico. ",
  },
  {
    id: 36,
    author: {
      nickname: "Nathalie Artaud",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTna2CPv8qHQBhMDLHGfquI4xoeTFTOA3Az0g&usqp=CAU",
      experience: 5,
    },
    content:
      "J'ai adoré passer du temps dans le jardin de Mylène, c'était un vrai petit havre de paix. J'aimerais beaucoup y retourner avec mon amie Chloé, sa robe avec les chats était tellement mignonne !",
  },
  {
    id: 46,
    author: {
      nickname: "Beyoncé",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTna2CPv8qHQBhMDLHGfquI4xoeTFTOA3Az0g&usqp=CAU",
      experience: 4,
    },
    content:
      "J'ai passé un moment fantastique dans le petit jardin de Mylène. J'ai hâte de revenir avec ma fille Blue Ivy, car sa robe avec les papillons était vraiment adorable.",
  },
  {
    id: 102,
    author: {
      nickname: "Eddy de Pretto",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTna2CPv8qHQBhMDLHGfquI4xoeTFTOA3Az0g&usqp=CAU",
      experience: 2,
    },
    content:
      "J'ai passé un excellent moment dans le petit jardin de Mylène. Je pense y retourner avec mon ami Clément, car sa robe avec les motifs géométriques était vraiment originale.",
  },
  {
    id: 54,
    author: {
      nickname: "Prince",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTna2CPv8qHQBhMDLHGfquI4xoeTFTOA3Az0g&usqp=CAU",
      experience: 3,
    },
    content:
      "J'ai adoré passer du temps dans le petit jardin de Mylène. Je prévois d'y retourner avec mon ami Michael car sa robe avec les étoiles était vraiment chic.",
  },
  {
    id: 230,
    author: {
      nickname: "Britney Spears",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTna2CPv8qHQBhMDLHGfquI4xoeTFTOA3Az0g&usqp=CAU",
      experience: 2,
    },
    content: `In his garden, where the roses bloom so red,
The guitarist used to play his sweetest tunes,
And every note that from his fingers fled
Was like a flower blooming in the dunes.

The sound of his guitar was pure and clear,
As if it came from angels up above,
And people came from far and wide to hear
The music of the man they called their love.

But one sad day, the roses lost their hue,
And in his garden, all was still and quiet,
For the guitarist had bid the world adieu,
And left his strings to rust and lose their wit.

Now all that's left is memories of his sound,
And in the garden, silence reigns profound.`,
  },
];

export const Profile: FC = () => (
  <S.Layout>
    <UserInfo user={user} />
    <Gardens gardens={gardens} />
    <CommentSection comments={comments} />
  </S.Layout>
);
