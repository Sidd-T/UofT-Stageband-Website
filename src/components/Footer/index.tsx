"use client";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              This website was designed by your fellow engineers.
              <br></br>
            </p>
            <p className="text-center text-base text-body-color">
              <a
                href="https://github.com/Sidd-T/UofT-Stageband-Website/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Found an issue with the site?
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
