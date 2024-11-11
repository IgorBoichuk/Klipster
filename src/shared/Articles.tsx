import React from "react";
import BreadCrumb from "./Breadcrumb";
import { RecommendedProducts } from "./RecommendedProducts";
import { ReviewedGoods } from "./ReviewedGoods";
import Bolt from "../../public/images/bolts.png";
import { Products } from "./Products";

export const Articles = () => {
  return (
    <div className="App">
      <BreadCrumb />
      <Products />
      <RecommendedProducts image={Bolt} title={"Рекомендовані товари"} />
      <ReviewedGoods image={Bolt} title={"Ви переглядали"} />
    </div>
  );
};
