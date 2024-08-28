import Cards from "@/components/Cards";
import ScrollUp from "@/components/Common/ScrollUp";
import Events from "@/components/Events";
import Intro from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | Skule Stageband",
  description: "This is Home page for Skule Stageband",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Intro />
      <Cards />
      <Events
        title="Upcoming Events"
        isFuture={true}
      />
      <Events
        title="Past Events"
        isFuture={false}
      />
    </>
  );
}
