import AboutBand from "@/components/About/AboutBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combo Page",
  description: "This is About Page for Stageband Combo",
  // other metadata
};

const ComboPage = () => {

  const paragraph = <p>
  The Skule Combo is a small ensemble within Stageband with only 5 members, making it the smallest of all the groups. <br></br><br></br>
  The band is comprised of experienced musicians who play at a multitude of different events like dinner dances, conferences, and other unique events. <br></br><br></br>
  While it is primarily a jazz combo, the band frequently plays music from all genres, and focuses on solos from the members.
  </p>

  return (
    <>
      <AboutBand
        title="Stageband Combo"
        subtitle="Jazz Combo, 5 Members"
        paragraph={paragraph}
        imgpath="/images/_combo/combo-2.jpg"
        imgalt="Skule Stageband Gold at the EngSci Dinner Dance, 2023"
      />
    </>
  );
};

export default ComboPage;
