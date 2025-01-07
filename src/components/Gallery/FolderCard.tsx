import { FolderCard } from "@/types/folderCard";
import Image from "next/image";
import Link from "next/link";

const SingleFolderCard = ({ card }: { card: FolderCard }) => {
  const { title, image } = card;
  return (
    <>
    <div className="h-full hover:scale-105 group relative overflow-hidden border border-body-color rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/Gallery/${title}`}
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-2 sm:p-2 md:px-2 md:py-3 lg:p-2 xl:px-3 xl:py-4 2xl:p-4">
          <h3>
            <Link
              href={`/Gallery/${title}`}
              className="block text-xl italic text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
            >
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SingleFolderCard;
