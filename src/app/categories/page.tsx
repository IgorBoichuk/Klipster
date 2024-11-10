import { Container } from "@/shared/Container";

import React from "react";
import { RecommendedProducts } from "@/shared/RecommendedProducts";
import { ReviewedGoods } from "@/shared/ReviewedGoods";
import Bolt from "../../../public/images/bolts.png";
import { AllCategories } from "@/shared/AllCategories";
import { Articles } from "@/shared/Articles";

const Categories = () => {
  return (
    <Container>
      <AllCategories />
      <RecommendedProducts image={Bolt} title={"Рекомендовані товари"} />
      <ReviewedGoods image={Bolt} title={"Ви переглядали"} />
      <Articles />
    </Container>
  );
};
export default Categories;
