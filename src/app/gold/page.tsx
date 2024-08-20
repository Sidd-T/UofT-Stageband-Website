import AboutSectionOne from "@/components/About/AboutSectionOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Page",
  description: "This is About Page for Stageband Gold",
  // other metadata
};

const GoldPage = () => {
  return (
    <>
      <AboutSectionOne
        title="Stageband Gold"
        subtitle="Jazz Big Band, 20+ Members"
        paragraph="Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap "
      />
    </>
  );
};

export default GoldPage;
