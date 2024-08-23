import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Cards from "@/components/Cards";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Intro from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
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
      {/* <Video /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
    </>
  );
}
