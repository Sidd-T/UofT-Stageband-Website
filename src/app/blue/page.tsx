import AboutSectionOne from "@/components/About/AboutSectionOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Page",
  description: "This is About Page for Stageband Blue",
  // other metadata
};

const BluePage = () => {
  return (
    <>
      <AboutSectionOne
        title="Stageband Blue"
        subtitle="Jazz Combo, 6-7 Members"
        paragraph="Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap "
      />
    </>
  );
};

export default BluePage;
