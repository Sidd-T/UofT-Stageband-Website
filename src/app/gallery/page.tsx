import FolderCards from "@/components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Skule Stageband",
  description: "This is the Gallery Folders Page for Stageband Combo",
  // other metadata
};

const GalleryHomePage = () => {
  return (
    <>
      <FolderCards
        title="Gallery"
        subtitle="Photos and videos from past Stageband events"
      />
    </>
  );
};

export default GalleryHomePage;
