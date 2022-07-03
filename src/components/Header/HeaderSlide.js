import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import { Container, PrimaryButton } from "../UI";
import { HeaderBadge } from "./";

const HeaderSlide = (props) => {
  const { title, subtitle, text, imgUrl, imgAlt, price } = props;
  return (
    <SplideSlide className="bg-base-200">
      <Container className="flex h-[80vh] flex-col items-center justify-between gap-y-14 py-10 text-center md:flex-row md:text-left lg:h-screen">
        <div className="prose-sm mx-auto max-w-xs md:prose-lg md:mx-0 md:max-w-md">
          <h4 className="capitalize">{subtitle}</h4>
          <h1 className="capitalize">{title}</h1>
          <p className="hidden capitalize md:block">{text}</p>
          <PrimaryButton element="link" to="/" className="btn btn-primary">
            shop now
          </PrimaryButton>
        </div>
        <div className="relative flex flex-col">
          <HeaderBadge price={price} />
          <img
            src={imgUrl}
            className="max-w-auto h-56 sm:h-64 lg:h-full"
            alt={imgAlt}
          />
        </div>
      </Container>
    </SplideSlide>
  );
};

export default HeaderSlide;
