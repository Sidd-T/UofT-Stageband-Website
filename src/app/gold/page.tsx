import AboutBand from "@/components/About/AboutBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Big Band! | Skule Stageband",
  description: "This is About Page for Stageband Gold",
  // other metadata
};

const GoldPage = () => {
  return (
    <>
      <AboutBand
        title="Stageband Gold"
        subtitle="Jazz Big Band, 20+ Members"
        paragraph="Skule Stageband Gold is the big band jazz ensemble within Skule Stageband. Comprised of over 20 members, Gold performs a wide variety of music, from traditional big band swing to contemporary jazz fusion. The band performs at various events throughout the year, including concerts, dances, and competitions. Gold is a close-knit group of musicians who share a passion for jazz and a commitment to musical excellence."
        imgpath_1="/images/_gold/gold-1.jpg"
        imgalt_1="Skule Stageband Gold at the EngSci Dinner Dance, 2023"
        imgpath_2="/images/gold/gold-image-dark.svg"
        imgalt_2="gold-image"
      />
    </>
  );
};

export default GoldPage;
