import AboutBand from "@/components/About/AboutBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combo Page",
  description: "This is About Page for Stageband Combo",
  // other metadata
};

const ComboPage = () => {

  const paragraph = <p>
  Write music eat soap Write music eat soap Write music eat soap Write music eat soap <br></br>Write music eat soap Write music eat soap Write music eat soap Write music eat soap
  </p>

  return (
    <>
      <AboutBand
        title="Stageband Combo"
        subtitle="Jazz Combo, 5 Members"
        paragraph={paragraph}
        imgpath="/images/_gold/gold-1.jpg"
        imgalt="Skule Stageband Gold at the EngSci Dinner Dance, 2023"
      />
    </>
  );
};

export default ComboPage;
