import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const Contact = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Contacts and Links"
          paragraph=""
          center={false}
          mb='50'
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  stageband@g.skule.ca
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  For general inquires about Stageband, or for booking Gold and Blue performances.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  jazzcombo@g.skule.ca
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  For anything related to Stageband Combo, like questions or booking gigs.
                </p>
              </div>
              
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href={"https://www.instagram.com/skulestageband/"}>
                    <u>Stageband Instagram</u>
                  </Link>  
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  For updates on performances, pictures, and more.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href={"https://www.youtube.com/@skulemusic1437/"}>
                    <u>Skule Music Youtube</u>
                  </Link>  
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The Youtube channel where we upload all our performances. Also used by other Skule Music groups.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href={"https://music.skule.ca/"}>
                    <u>Skule Music Parent Site</u>
                  </Link>    
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The parent group for all music groups within Skule, has contacts listed for other groups.
                </p>
              </div>
              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  sidd.topiwala02@gmail.com
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  For any inquires specifically about this website, or any suggestions of any possible improvements or additions.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
