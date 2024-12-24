'use server'

import SectionTitle from "../Common/SectionTitle";
import SingleEvent from "./SingleEvent";
import { queryDB } from "@/app/actions";
import { Event } from "@/types/event";
import '../../styles/events.css'

async function fetchEvents(isFuture:boolean) {

  let whereClause = '';
  let orderByClause = '';

  if (isFuture) {
    whereClause += `p.date >= CURRENT_DATE`; // Future events
    orderByClause += `ORDER BY p.date ASC`; // Future events, closest to current date first
  } else {
    whereClause += `p.date < CURRENT_DATE`; // Past events
    orderByClause += `ORDER BY p.date DESC`; // Past events, most recent first
  }

  // Build the full query with placeholders
  const query = `SELECT p.* FROM events p WHERE ${whereClause} ${orderByClause}`;

  try {
    const events:any[] = await queryDB(query);
    return events;
  } 
  catch (err: unknown) {
    console.error(err);
    return []
  }
}

const Events = async ({
  title,
  isFuture
}: {
  title: string;
  isFuture: boolean;
}) => {

  const events: any[] = await fetchEvents(isFuture);

  return (
    <section id="features" className="pt-6 md:pt-10 lg:pt-16 shadow-one">
      <div className="container">
        <SectionTitle
          title={title}
          paragraph=""
          center
          mb="50"
        />
        <div className="overflow-y-auto max-h-[calc(300px)] py-2 scrollbar-hidden bg-lightgrey shadow-one rounded-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2 lg:grid-cols-1">
            {events.map((event: Event) => (
              <SingleEvent
                key={event.id}
                event={event}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

