import {Carousel} from "react-bootstrap";

import { CarouselItemType } from '../../../../type';
import { CarouselItem } from './CarouselItem';

export type Props = {
  items: Array<CarouselItemType>;
};



export function CarouselSwipe({ items }: Props) {
  return (
    <div>
    <Carousel fade>
   
    {items.map((item, idx) => (
      <Carousel.Item key={idx}>
      <CarouselItem key={idx} {...item}/>
      </Carousel.Item>
  ))}

    </Carousel>
    </div>
  );
}



