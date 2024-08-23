import Link from "next/link";

const Intro = () => {

  const currYear = new Date().getFullYear();
  const stagebandAge = currYear - 1984;

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-4 pt-[120px] dark:bg-gray-dark md:pb-[0px] md:pt-[150px] xl:pb-[40px] xl:pt-[180px] 2xl:pb-[50px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  SKULE STAGEBAND
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                {`The student run Skule™ Stage Band has been playing to great acclaim at Skule™ events for over ${stagebandAge} years. 
                These include the most celebrated dances of the year (Cannonball and Gradball) as well as Suds, the EngSci Dinner Dance, 
                and our very own gigs at Hart House and other local establishments.`} 
                <br></br><br></br>
                The Stage Band was established in 1983 by engineering students with help from Mr. Malcolm McGrath of the Skule Alumni Association. 
                It is now the longest running Skule™ Music ensemble, welcoming anybody at U of T who enjoys playing and performing swing, big band, funk, latin, and other genres of jazz music.
                </p>
                {/* <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
