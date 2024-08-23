import AboutBand from "@/components/About/AboutBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Page",
  description: "This is About Page for Stageband Blue",
  // other metadata
};

const BluePage = () => {

  const paragraph = <p>
  Stageband blue is a small to medium sized ensemble within stageband that is focused on improvisation. <br></br><br></br>
  With around 6-8 players, the band performs songs from The Real Book, as well as songs picked and arranged by the members of the band. <br></br><br></br>
  The band is a great learning environment and is one of the best ways for musicians new to jazz to start improvising and playing jazz.

  </p>

  return (
    <>
      <AboutBand
        title="Stageband Blue"
        subtitle="Jazz Combo, 6-8 Members"
        paragraph={paragraph}
        imgpath="/images/_blue/blue-4.jpg"
        imgalt="Skule Stageband Gold at the EngSci Dinner Dance, 2023"
      />
    </>
  );
};

export default BluePage;
