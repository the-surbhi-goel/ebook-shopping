import React from "react";
import { Faq, Hero } from "../components/home";
import { FeaturedProduct } from "../components/product";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <Faq />
    </>
  );
};
