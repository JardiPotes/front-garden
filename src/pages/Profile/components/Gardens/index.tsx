import {FC, Fragment} from 'react';

import Logo from '../../../../assets/jardi-logo-trans.png';
import {UserProfileWordings} from '../../../../assets/wordings';
import {UserWithGardens} from '../..';
import {SectionHeader} from '../../styles';
import {GardenInfo} from './GardenInfo';
import * as S from './styles';

export type GardensProps = Pick<UserWithGardens, 'gardens'>;

export const Gardens: FC<GardensProps> = ({gardens}) => {
  if (!gardens || !gardens.length) return null;
  const sectionTitle =
    gardens.length > 1
      ? UserProfileWordings.gardenSectionHeader.plural
      : UserProfileWordings.gardenSectionHeader.singular;

  return (
    <>
      <SectionHeader>{sectionTitle}</SectionHeader>
      {gardens.map((garden, index) => (
        <Fragment key={garden.id}>
          {!!index && <S.SeparationIcon src={Logo} />}
          <GardenInfo garden={garden} />
        </Fragment>
      ))}
    </>
  );
};
