import { Articles } from "@/shared/Articles";
import BreadCrumb from "@/shared/BreadCrumb";
import { SingleProductCrad } from "@/shared/SingleProductCrad";

import React from "react";

const Categorypage = () => {
  return (
    <div>
      <BreadCrumb />
      <Articles />
      <SingleProductCrad />
    </div>
  );
};

export default Categorypage;
