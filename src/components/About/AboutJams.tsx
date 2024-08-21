import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutJams = ({
  title,
  subtitle,
  paragraphs,
}: {
  title: string;
  subtitle: string;
  paragraphs: string[];
}) => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title={title} paragraph={subtitle} mb="44px" />
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-semi-bold mb-4 text-2xl !leading-tight text-black dark:text-white sm:text-xl md:text-2xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
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

export default AboutJams;
