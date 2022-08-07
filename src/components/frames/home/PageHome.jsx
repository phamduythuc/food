import React, { useEffect } from "react";
import Category from "../../UI/category/Category";
import BrandExperience from "./component/BrandExperience";
import DisplayProduct from "./component/DisplayProduct";
import Introduction from "./component/Introduction";
import ProductHot from "./component/ProductHot";
import Qualityservice from "./component/Qualityservice";
import Testimonial from "./component/Testimonial";
import "../../../styles/home.css";
import "../../../styles/hero-section.css";

function PageHome() {
  useEffect(() => window.scrollTo(0, 100));
  return (
    <>
      <Introduction />
      <section>
        <Category />
      </section>
      <Qualityservice />
      <DisplayProduct />
      <BrandExperience />
      <ProductHot />
      <Testimonial />
    </>
  );
}

export default PageHome;
