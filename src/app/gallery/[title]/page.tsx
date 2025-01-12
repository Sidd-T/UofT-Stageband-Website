import ImageGallery from "@/components/Gallery/ImageGallery";
import VideoGallery from "@/components/Gallery/VideoGallery";
import folderCardData from "@/components/Gallery/folderCardData";
import { FolderCard } from "@/types/folderCard";
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

  const folderCardWithVideos = folderCardData.find((folderCard: FolderCard) => 
    folderCard.title === title && folderCard.videos.length > 0
  );
  
  const hasVideos: boolean = !!folderCardWithVideos; // Boolean value indicating if a folderCard was found with videos
  const videos: string[] = folderCardWithVideos ? folderCardWithVideos.videos : []; // Get the videos or an empty array if none

  return (
    <>
      <ImageGallery
        title={title}
        subtitle="Photos"
      />
      {(hasVideos) ?
        <VideoGallery
          title={title}
          subtitle="Videos"
          videos={videos}
        />
      :
        <></>
      }
    </>
  );
};

export default GalleryPage;
