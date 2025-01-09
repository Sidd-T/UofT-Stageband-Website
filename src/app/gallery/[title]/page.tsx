import ImageGallery from "@/components/Gallery/ImageGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Skule Stageband",
  description: "This is the Gallery Page for Stageband Combo",
  // other metadata
};

const GalleryPage = async ({
  params,
}: {
  params: Promise<{ title: string }>
}) => {

  const title = (await params).title;

  return (
    <>
      <ImageGallery
        title={title}
        subtitle="Photos"
      />
    </>
  );
};

export default GalleryPage;
