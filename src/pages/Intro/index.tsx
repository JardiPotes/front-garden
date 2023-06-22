import {CenterElement} from '../../GlobalStyles';
import {Wrapper} from './styles';

export const Intro = (): JSX.Element => {
  return (
    <Wrapper>
      <CenterElement>
        <h1>Bienvenue sur Jardipotes !</h1>
      </CenterElement>
      <p>
        Le principe est simple&nbsp;: mettre en relation ceux qui voudraient
        jardiner mais n'ont pas de jardin (invité⋅es), avec ceux qui ont un
        jardin et sont d'accord pour le partager (hôtes)&nbsp;! Tout
        utilisateur⋅ice possède un profil permettant de connaître ses envies de
        jardinage et de le/la contacter. Un système de commentaire permet de
        s'assurer que tout le monde est cool&nbsp;:)
      </p>
      <p>
        Hôtes et invité⋅es conviennent des modalités en toute liberté,
        cependant, nous vous invitons à respecter quelques règles de bonnes
        conduite…
      </p>
      <p>
        Côté hôtes&nbsp;:
        <ul>
          <li>
            Clarté&nbsp;: dites clairement ce que vous proposez dans votre
            description. Par exemple&nbsp;: «̌&nbsp;J'ai une parcelle de terre de
            4&nbsp;m<sup>2</sup>, vous pouvez y accéder quand vous le souhaitez
            pour y faire pousser ce que vous voulez sauf des plantes
            invasives&nbsp;» ou encore «&nbsp;Je jardine tous les dimanches
            après-midi, parfois aussi un peu de bricolage, une ou deux personnes
            sont les bienvenues pour se joindre à moi&nbsp;»
          </li>
          <li>
            Honnêteté&nbsp;: Jardipotes n'est pas un outil magique pour trouver
            un jardinier gratuit. Si votre jardin a besoin d'un professionnel,
            embauchez un professionnel&nbsp;! Et surtout nous vous invitons à
            partager les récoltes.
          </li>
        </ul>
      </p>
      <p>
        Côté invité⋅es&nbsp;:
        <ul>
          <li>
            Respect&nbsp;: vous allez accéder à la propriété d'une autre
            personne, nous vous invitons à faire preuve de respect vis-à-vis de
            votre hôte et de son foyer (par exemple en ne jetant rien par terre,
            en demandant si c'est ok avant de caresser un animal de compagnie,
            etc…)
          </li>
        </ul>
      </p>
      <p>
        Pour tout le monde&nbsp;:
        <ul>
          <li>
            Respect et bienveillance&nbsp;: aucun propos haineux, raciste,
            sexiste, lgbt-phobe ou validiste ne sera toléré dans les messages et
            les commentaires. Et IRL c'est la même chose, restez poli,
            respectueux et bienveillant. Inutile aussi de vous signaler que
            Jardipotes n'est pas une appli de rencontre&nbsp;;) En cas de soucis
            avec un⋅e hôte ou invité⋅e, n'hésitez pas à nous contacter.
          </li>
          <li>
            Fiabilité&nbsp;: on peut faire poussez des carottes sans poser de
            lapin&nbsp;! Si vous devez annuler une session de jardinage, essayez
            de prévenir le plus tôt possible votre jardipote.
          </li>
          <li>
            Partage&nbsp;: ce n'est pas obligatoire mais n'hésitez pas à
            partager vos connaissance en jardinage, à échanger et à passer de
            chouettes moments entre jardipotes&nbsp;!
          </li>
        </ul>
      </p>
      <p>
        Nous serons particulièrement attentif⋅ves aux commentaires et aux soucis
        qui nous serons remontés et n'hésiterons pas à supprimer le compte de
        toute personne ayant un comportement problématique.
      </p>
    </Wrapper>
  );
};
