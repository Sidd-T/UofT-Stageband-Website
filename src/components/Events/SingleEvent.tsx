import { Event } from "@/types/event";

const SingleEvent = ({ event: event }: { event: Event }) => {
  const { dateText, title, paragraph } = event;
  return (
    <div className="w-full border">
      <div className="wow fadeInUp m-5" data-wow-delay=".15s">
        {/* <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div> */}
        <div className="grid grid-cols-2 place-content-between">
          <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xxl xl:text-2xl">
            {title}
          </h2>
          <h2 className="mb-5 text-xl font-medium text-grey dark:text-white sm:text-xl lg:text-xxl xl:text-2xl text-right">
            {dateText}
          </h2>
        </div>
        
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleEvent;
