import AboutBand from "@/components/About/AboutBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jams Page",
  description: "This is About Page for Stageband Jams",
  // other metadata
};

const JamsPage = () => {

  const paragraph = <p>
  Write music eat soap Write music eat soap Write music eat soap Write music eat soap <br></br>Write music eat soap Write music eat soap Write music eat soap Write music eat soap
  </p>

  return (
    <>
      <AboutBand
        title="Student Jams"
        subtitle="Weekly Jam Sessions for Students and Alumni"
        paragraph={paragraph}
        imgpath="/images/_gold/gold-1.jpg"
        imgalt="Skule Stageband Gold at the EngSci Dinner Dance, 2023"
      />
    </>
  );
};

export default JamsPage;
