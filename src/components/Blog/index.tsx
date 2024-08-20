import SectionTitle from "../Common/SectionTitle";
import SingleCard from "./SingleBlog";
import cardData from "./cardData";

const Cards = () => {
  return (
    <section
      id="card"
      className="bg-white dark:bg-bg-color-dark py-2 md:py-3 lg:py-4"
    >
      <div className="container">
        {/* <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        /> */}

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
          {cardData.map((card) => (
            <div key={card.id} className="w-full">
              <SingleCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
