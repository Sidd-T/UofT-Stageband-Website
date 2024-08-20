import AboutSectionOne from "@/components/About/AboutSectionOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jams Page",
  description: "This is About Page for Stageband Jams",
  // other metadata
};

const JamsPage = () => {
  return (
    <>
      <AboutSectionOne
        title="Student Jams"
        subtitle="Weekly Jam Sessions for Students and Alumni"
        paragraph="Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap "
      />
    </>
  );
};

export default JamsPage;
