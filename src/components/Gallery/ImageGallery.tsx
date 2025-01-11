'use client'

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { CircularProgress, Pagination } from "@mui/material";

import NextJsImage from "../Lightbox/NextJSImage";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

const ImageGallery = ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1); // Track current page for pagination
  const itemsPerPage = 16; // Number of images per page
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);  

  useEffect(() => {
    // Fetch the list of images for the given event
    setLoading(true);
    fetch(`/api/gallery/${title}`)
      .then((response) => response.json())
      .then((data) => setImages(data))
      .then(() => setLoading(false))
  }, [title]);

  const slides:StaticImageData[] = [];
  images.forEach((image:string) => {
    slides.push({src: `/images/gallery/${title}/${image}`, height: 1080, width: 1920});
  })
  
  // Get the images for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageImages = images.slice(startIndex, startIndex + itemsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(images.length / itemsPerPage);
 
  // Handle page change using Material UI Pagination
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page); // Update the current page
  };

  if (loading) {
    return (
      <div className="w-screen h-screen flex ">
        <div className="m-auto">
          <CircularProgress/>
        </div>       
      </div>
    )
  }
  else return (
    <>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        index={selectedIndex}
        on={{ view: ({ index: currentIndex }) => setSelectedIndex(currentIndex) }}
      />
      <section id="folders" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-6 ">
                <h2 className="text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  {`${title}`}
                </h2>
                <p className="text-base !leading-relaxed text-body-color md:text-2xl">
                  {subtitle}
                </p>
              </div>

              <div className="flex w-full z-10 rounded-sm bg-white shadow-three flex-col lg:flex-row"> {/* Use flex-col on small screens and flex-row on larger screens */}
                {/* Large image on top for smaller screens */}
                <div className="w-full lg:w-3/5 p-4">
                  <div className="relative w-full h-0 pb-[68.3%] mx-auto overflow-hidden" onClick={() => setLightboxOpen(true)}>
                    <Image
                      src={`/images/gallery/${title}/${images[selectedIndex]}`}
                      alt={`Image from ${title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 border-8 border-dark cursor-pointer object-cover"
                    />
                  </div>
                </div>

                {/* Thumbnail gallery and pagination */}
                <div className="flex flex-col w-full lg:w-2/5 border-body-color px-4 pt-4 pb-6">
                  <p className="italic text-black text-lg py-5 text-center">
                    {(totalPages > 1) ? `Showing images ${((currentPage-1)*itemsPerPage+1)}-${((currentPage-1)*itemsPerPage+currentPageImages.length)} of ${images.length} total images` : `Showing ${images.length} images`}
                  </p>

                  {/* Thumbnail grid */}
                  <div className="grid grid-cols-4 gap-1">
                    {currentPageImages.map((image, index) => (
                      <div key={index} className="w-full">
                        <div
                          className="h-full group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
                          onClick={() => setSelectedIndex(startIndex + index)} // Adjust the index for pagination
                        >
                          <div className={`${(index+((currentPage-1)*itemsPerPage) === selectedIndex) ? 'border-4 border-primary' : 'border'} relative block aspect-[4/3] w-full border-dark hover:border-4`}>
                            <Image
                              src={`/images/gallery/${title}/${image}`}
                              alt={`Image ${startIndex + index + 1}`}
                              fill
                              className="cursor-pointer"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination controls */}
                  <div className="mt-auto flex justify-center pt-4">
                    <Pagination
                      count={totalPages} // Total number of pages
                      page={currentPage} // Current page
                      onChange={handlePageChange} // Handle page change
                      color="primary" // Default color for pagination
                      shape="rounded" // Optional: Rounded pagination buttons
                      sx={{
                        '& .MuiPaginationItem-root': {
                          color: '#4A6CF7', // Custom color for pagination buttons
                        },
                        '& .MuiPaginationItem-root.Mui-selected': {
                          backgroundColor: '#4A6CF7', // Selected page background color
                          color: '#fff', // Selected page text color
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
