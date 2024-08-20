import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutBand = ({
  title,
  subtitle,
  paragraph,
    imgpath_1,
    imgalt_1,
    imgpath_2,
    imgalt_2,
}: {
  title: string;
  subtitle: string;
  paragraph: string;
    imgpath_1: string; //image 1 is for light mode
    imgalt_1: string;
    imgpath_2: string; //image 2 is for dark mode
    imgalt_2: string;
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
              <p className="mb-4 text-2xl font-semi-bold !leading-tight text-black dark:text-white sm:text-xl md:text-2xl">
                {paragraph}
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[1024/683] max-w-[500px] lg:mr-0 object-scale-down">
                <Image
                  src={imgpath_1}
                  alt={imgalt_1}
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src={imgpath_2}
                  alt={imgalt_2}
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBand;
