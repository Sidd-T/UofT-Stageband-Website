import SingleFolderCard from "./FolderCard";
import folderCardData from "./folderCardData";
import SectionTitle from "../Common/SectionTitle";

const FolderCards = ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) => {
  return (
    <section id="folders" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={title}
                paragraph={subtitle}
                mb="20px"
              />
            </div>

            <div className="container border-body-color py-5">
                <div className="grid grid-cols-4 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
                {folderCardData.map((card, index) => (
                    <div key={index} className="w-full">
                    <SingleFolderCard card={card} />
                    </div>
                ))}
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FolderCards;
