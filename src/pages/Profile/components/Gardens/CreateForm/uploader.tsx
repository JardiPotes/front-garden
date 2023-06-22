import {FC} from 'react';
import {UseFormRegister} from 'react-hook-form';

import {CenterElement} from '../../../../../GlobalStyles';
import {GardenData} from '.';

interface UploaderProps {
  register: UseFormRegister<GardenData>;
}

export const Uploader: FC<UploaderProps> = ({register}) => {
  return (
    <CenterElement>
      <label htmlFor="garden_image">Photo du jardin :</label>
      <input type="file" accept="image/*" {...register('garden_image')} />
    </CenterElement>
  );
};
