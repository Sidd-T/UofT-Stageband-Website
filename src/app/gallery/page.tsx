import FolderCards from "@/components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Skule Stageband",
  description: "This is the Gallery Page for Stageband Combo",
  // other metadata
};

const GalleryHomePage = () => {
  return (
    <>
      <FolderCards
        title="Gallery"
        subtitle="Photos and videos from past Stageband Events"
      />
    </>
  );
};

export default GalleryHomePage;
