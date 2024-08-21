import AboutBand from "@/components/About/AboutBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Big Band! | Skule Stageband",
  description: "This is About Page for Stageband Gold",
  // other metadata
};

const GoldPage = () => {

  const paragraph = <p>
  Skule Stageband Gold is the big band jazz ensemble within Skule Stageband. <br></br><br></br>
  Comprised of over 20 members, Gold performs a wide variety of music, from traditional big band swing to contemporary jazz fusion. <br></br><br></br>
  The band performs at various events throughout the year, including concerts, dances, and competitions. 
  Gold is a close-knit group of musicians who share a passion for jazz and a commitment to musical excellence.
  </p>

  return (
    <>
      <AboutBand
        title="Stageband Gold"
        subtitle="Jazz Big Band, 20+ Members"
        paragraph={paragraph}
        imgpath="/images/_gold/gold-1.jpg"
        imgalt="Skule Stageband Gold at the EngSci Dinner Dance, 2023"
      />
    </>
  );
};

export default GoldPage;
