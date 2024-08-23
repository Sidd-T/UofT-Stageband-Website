import AboutBand from "@/components/About/AboutBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jams Page",
  description: "This is About Page for Stageband Jams",
  // other metadata
};

const JamsPage = () => {

  const paragraph = <p>
  Jams are weekly* run jam sessions open to all students at the University, regardless of Faculty. <br></br><br></br>
  Coming to jams is a great way to meet other musicians, develop your skills, and have fun playing music. <br></br><br></br>
  Currently, Jams are being run on &lt;TBD&gt; in Myhal 041 (basement). <br></br><br></br>
  *Jams may not happen every week, if you are interested, please join the discord, where we make the annoucements for jams.
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
