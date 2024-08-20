import AboutSectionOne from "@/components/About/AboutSectionOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combo Page",
  description: "This is About Page for Stageband Combo",
  // other metadata
};

const ComboPage = () => {
  return (
    <>
      <AboutSectionOne
        title="Stageband Combo"
        subtitle="Jazz Combo, 5 Members"
        paragraph="Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap "
      />
    </>
  );
};

export default ComboPage;
