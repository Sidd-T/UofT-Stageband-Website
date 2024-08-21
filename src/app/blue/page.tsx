import AboutBand from "@/components/About/AboutBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Page",
  description: "This is About Page for Stageband Blue",
  // other metadata
};

const BluePage = () => {

  const paragraph = <p>
  Write music eat soap Write music eat soap Write music eat soap Write music eat soap <br></br>Write music eat soap Write music eat soap Write music eat soap Write music eat soap
  </p>

  return (
    <>
      <AboutBand
        title="Stageband Blue"
        subtitle="Jazz Combo, 6-7 Members"
        paragraph={paragraph}
        imgpath="/images/_gold/gold-1.jpg"
        imgalt="Skule Stageband Gold at the EngSci Dinner Dance, 2023"
      />
    </>
  );
};

export default BluePage;
