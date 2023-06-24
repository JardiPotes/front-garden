import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FC, useState} from 'react';

import garden1 from '@/assets/garden1.jpg';
import garden2 from '@/assets/garden2.jpg';
import garden3 from '@/assets/garden3.jpg';

import * as S from './styles';

type CarouselItemType = {
  imageSrc: string;
  imageAlt: string;
};

interface SlideshowProps {
  items: Array<CarouselItemType>;
}

interface SlideData {
  items: Array<CarouselItemType>;
  activeIndex: number;
}

const data = [
  {
    imageSrc: garden1,
    imageAlt: 'Garden1',
  },
  {
    imageSrc: garden2,
    imageAlt: 'A rock formation',
  },
  {
    imageSrc: garden3,
    imageAlt: 'Some flowers',
  },
];

export const SlideView: FC = () => <Slideshow items={data} />;

const Slideshow: FC<SlideshowProps> = props => {
  const [{items, activeIndex}, setState] = useState<SlideData>({
    items: props.items,
    activeIndex: 0,
  });

  const moveTo = (newIndex: number) => () => {
    if (newIndex === -1) {
      setState(s => ({...s, activeIndex: items.length - 1}));
      return;
    }
    if (newIndex === items.length) {
      setState(s => ({...s, activeIndex: 0}));
      return;
    }

    setState(s => ({...s, activeIndex: newIndex}));
  };

  return (
    <>
      <S.ImageBox>
        <img
          alt={items[activeIndex].imageAlt}
          src={items[activeIndex].imageSrc}
        />
        <S.NavButton position="left" onClick={moveTo(activeIndex - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </S.NavButton>
        <S.NavButton position="right" onClick={moveTo(activeIndex + 1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </S.NavButton>
      </S.ImageBox>
    </>
  );
};
