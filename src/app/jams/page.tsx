import AboutJams from "@/components/About/AboutJams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jams Page",
  description: "This is About Page for Stageband Jams",
  // other metadata
};

const JamsPage = () => {
  return (
    <>
      <AboutJams
        title="Student Jams"
        subtitle="Weekly Jam Sessions for Students and Alumni"
        paragraphs={[
          "Currently we host our Jams on Thursdays at 6:30PM",
          "Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap Write music eat soap",
        ]}
      />
    </>
  );
};

export default JamsPage;
