import { Card } from "@/types/card";

const cardData: Card[] = [
  {
    id: 1,
    title: "Stageband Gold",
    paragraph:
      `A big band celebrating ${(new Date().getFullYear() - 1984)} of musical history, Stageband Gold is longest running musical ensemble at Skule.`,
    image: "/images/_gold/gold-2.jpg",
    link: "/gold",
  },
  {
    id: 2,
    title: "Stageband Blue",
    paragraph:
      "A smaller musical group focusing on improvisation, Stageband Blue is a great place for musicians to grow their skills.",
    image: "/images/_blue/blue-1.jpg",
    link: "/blue",
  },
  {
    id: 3,
    title: "Stageband Combo",
    paragraph:
      "Stageband Combo is a small group made up of experienced musicians with a passion for jazz and improvisation.",
    image: "/images/_combo/combo-2.jpg",
    link: "/combo",
  },
  {
    id: 4,
    title: "Jams",
    paragraph:
      "Open to all skill levels, student jams are run weekly and are the perfect way to have fun and improve at the same time.",
    image: "/images/_jams/jams-1.png",
    link: "/jams",
  },
];
export default cardData;
