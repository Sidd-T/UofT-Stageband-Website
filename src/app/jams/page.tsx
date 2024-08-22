import AboutBand from "@/components/About/AboutBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jams Page",
  description: "This is About Page for Stageband Jams",
  // other metadata
};

const JamsPage = () => {

  const paragraph = <p>
  <i>Jams</i> are weekly* run jam sessions open to all students at the University, regardless of Faculty. <br></br>
  Jams are a great way to meet other musicians, develop your skills, and have fun playing music. <br></br>
  </p>

  return (
    <>
      <AboutBand
        title="Student Jams"
        subtitle="Weekly Jam Sessions for Students and Alumni"
        paragraph={paragraph}
        imgpath="/images/_jams/jams-1.gif"
        imgalt="Skule Stageband Gold at the EngSci Dinner Dance, 2023"
      />
    </>
  );
};

export default JamsPage;
