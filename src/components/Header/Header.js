import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { HeaderSlide } from "./index";

const sliderOptions = {
  type: "fade",
  rewind: true,
  mediaQuery: "min",
  breakpoints: {
    768: {
      arrows: false,
    },
  },
};

const DUMMY_SLIDES = [
  {
    id: 0,
    title: "aesthetic traditional bench",
    subtitle: "essential items",
    text: "Upholstered armchair in bouclé fabric with contrast wooden sides and legs.",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/moderne-9ad04.appspot.com/o/images%2Fheader%2Fslide01.png?alt=media&token=f7fa4071-217f-4d74-8044-0ecb2e416d9e",
    imgAlt: "This is img",
    price: 329,
  },
  {
    id: 1,
    title: "upholstered boucle armchair",
    subtitle: "essential items",
    text: "Upholstered armchair in bouclé fabric with contrast wooden sides and legs.",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/moderne-9ad04.appspot.com/o/images%2Fheader%2Fslide02.png?alt=media&token=f7fa4071-217f-4d74-8044-0ecb2e416d9e",
    price: 125,
  },
  {
    id: 2,
    title: "Wood and ratten bench",
    subtitle: "essential items",
    text: "Upholstered armchair in bouclé fabric with contrast wooden sides and legs.",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/moderne-9ad04.appspot.com/o/images%2Fheader%2Fslide03.png?alt=media&token=f7fa4071-217f-4d74-8044-0ecb2e416d9e",
    price: 225,
  },
];

const Header = () => {
  const headerSlides = DUMMY_SLIDES.map((headerSlide) => (
    <HeaderSlide key={headerSlide.id} {...headerSlide} />
  ));
  return (
    <header>
      <Splide options={sliderOptions} aria-label="Featured Products">
        {headerSlides}
      </Splide>
    </header>
  );
};

export default Header;
