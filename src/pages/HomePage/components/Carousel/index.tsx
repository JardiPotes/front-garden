import { CarouselSwipe } from "./CarouselSwipe";



export function CarouselHome() {

    const items = [
        {
          imageSrc: "/images/gardentest.jpg",
          imageAlt: "Garden1",
        },
        {
          imageSrc: "/images/jardin2.png",
          imageAlt: 'A rock formation',
        },
        {
          imageSrc: "/images/jardin1.png",
          imageAlt: 'Some flowers',
        }]
        return (
            <div className="container">
              <CarouselSwipe items={items} />
            </div>
          );

}