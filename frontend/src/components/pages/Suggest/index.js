import React, { Fragment } from "react";
import { WidthLimiter, Navigation } from "../../commons";
import { FormContainer } from "./containers";

const Suggest = () => {
  return (
    <Fragment>
      <WidthLimiter>
        <FormContainer />
      </WidthLimiter>
      <Navigation active="menu" />
    </Fragment>
  );
};

export default Suggest;
