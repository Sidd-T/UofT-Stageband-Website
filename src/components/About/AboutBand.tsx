import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutBand = ({
  title,
  subtitle,
  paragraph,
  imgpath,
  imgalt,
  videoTitle,
}: {
  title: string;
  subtitle: string;
  paragraph: JSX.Element;
  imgpath: string;
  imgalt: string;
  videoTitle?: string;
}) => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={title}
                paragraph={subtitle}
                mb="44px"
              />
              <div className="mb-4 text-2xl font-semi-bold !leading-tight text-black dark:text-white sm:text-xl md:text-2xl">
                {paragraph}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[1024/683] lg:mr-0 object-scale-down">
                {(videoTitle) ?          
                <iframe
                    id="iframe1"
                    className="mx-auto drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                    src={imgpath}
                    title={videoTitle}
                    aria-hidden="true"
                    width={"100%"}
                    height={"100%"}
                />
                :
                <Image
                  src={imgpath}
                  alt={imgalt}
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBand;
