import {FC} from 'react';
import {UseFormRegister} from 'react-hook-form';

import {GardenData} from '.';
import * as S from './styles';

interface UploaderProps {
  register: UseFormRegister<GardenData>;
}

export const Uploader: FC<UploaderProps> = ({register}) => {
  return (
    <S.CenterElement>
      <label htmlFor="garden_image">Photo du jardin :</label>
      <input type="file" accept="image/*" {...register('garden_image')} />
    </S.CenterElement>
  );
};
