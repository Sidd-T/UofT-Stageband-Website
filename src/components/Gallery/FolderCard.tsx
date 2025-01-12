import { FolderCard } from "@/types/folderCard";
import Image from "next/image";
import Link from "next/link";
import FolderIcon from '@mui/icons-material/Folder';

const SingleFolderCard = ({ card }: { card: FolderCard }) => {
  const { title, image } = card;
  return (
    <>
    <div className="h-full hover:scale-105 group relative overflow-hidden border border-body-color rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/gallery/${title}`}
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
        </Link>
        <div className="p-2 sm:p-2 md:px-2 md:py-3 lg:p-2 xl:px-3 xl:py-4 2xl:p-4">
          <div className="flex items-center justify-between text-black">
            <h3>
              <Link
                href={`/gallery/${title}`}
                className="block text-xl italic text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
              >
                {title.replace(/_/g, ' ')}
              </Link>
            </h3>
            <FolderIcon/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFolderCard;
