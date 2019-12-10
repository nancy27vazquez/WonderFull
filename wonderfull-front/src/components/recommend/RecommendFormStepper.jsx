import React from "react";
import Step1 from "../recommend/Step1MainInfo";
import Step2 from "../recommend/Step2CategoryRate";
import Step3 from "../recommend/Step3BetterAt";
import Step4 from "../recommend/Step4Gallery";
import Step5 from "../recommend/Step5PriceTagsTransport";
import Step6 from "../recommend/Step6Highlights";
import Step7 from "../recommend/Step7ContactInfo";
import Step8 from "../recommend/Step8Confirmation";
import Menu from "../common/Nav";
import Footer from "../common/Footer";

const RecommendFormStepper = () => {
  return (
    <div>
      <Menu />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Step7 />
      <Step8 />
      <Footer />
    </div>
  );
};

export default RecommendFormStepper;
