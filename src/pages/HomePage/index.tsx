import {SlideView} from './components/Carousel';
import {CTA} from './components/CTA';
import {TitleCard} from './components/TitleCard';
import * as S from './styles';

export default function HomePage(): JSX.Element {
  return (
    <div>
      <S.HeroWrapper>
        <TitleCard />
        <CTA />
      </S.HeroWrapper>
      <S.CarouselWrapper>
        <SlideView />
      </S.CarouselWrapper>
    </div>
  );
}
