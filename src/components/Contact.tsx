import { LinkCard } from "./LinkCard"
import {useState} from "react";

export const Contact = () => {
  const cards = [
  {
    id: "Twitter",
    img: "./twitter.svg",
    text: "Feel free to see my life on Twitter !",
    href: "https://twitter.com"
  },
  {
    id: "GitHub",
    img: "./github.svg",
    text: "Explore my projects on GitHub",
    href: "https://github.com"
  },
  {
    id: "LinkedIn",
    img: "./linkedin.svg",
    text: "I'm open to collaboration opportunities on LinkedIn",
    href: "https://linkedin.com"
  }
];

  const [hoverCard,setHoverCard]=useState("");
  return (
    <div className="content">
      {cards.map(card=>(
        <LinkCard
          key={card.id}
          id={card.id}
          img={card.img}
          text={card.text}
          href={card.href}
          hoverCard={hoverCard}
          setHoverCard={setHoverCard}
        />))
        }
      </div>
  )
}
