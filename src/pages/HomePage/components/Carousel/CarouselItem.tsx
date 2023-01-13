import React from 'react';

import { CarouselItemType } from '../../../../type';

export type Props = CarouselItemType

//carousel de photos de la page Main
export function CarouselItem({imageSrc, imageAlt}: Props)  {

  return (

            <img
              className="d-block mw-50"
              src={imageSrc}
              alt={imageAlt}
            />

    );
  }

