import SectionTitle from "../Common/SectionTitle";
import SingleEvent from "./SingleEvent";
import eventsData from "./eventsData";

const Events = ({
  title,
  isFuture
}: {
  title: string;
  isFuture: boolean;
}) => {

  /**
   * Gets either the upcoming or past events based on isFuture prop, then sorts appropriately
   * @returns List of JSX elements of Events
   */
  function getEvents() {
    const today = new Date();

    const events = eventsData.filter((event) => {
      return ((isFuture) ? event.date > today : event.date < today);
    })

    events.sort((a, b) => {
      return ((isFuture) ? (a.date.getTime() - b.date.getTime()) : (b.date.getTime() - a.date.getTime()));
    })

    // we dont want too many past events showing, so just cut to 2
    if (!isFuture){
      events.length = 2;
    }

    return events.map((event) => (
      <SingleEvent key={event.id} event={event} />
    ))
  }

  return (
    <>
      <section id="features" className="pt-6 md:pt-10 lg:pt-16">
        <div className="container">
          <SectionTitle
            title={title}
            paragraph=""
            center
            mb='50'
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-1">
            {getEvents()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
