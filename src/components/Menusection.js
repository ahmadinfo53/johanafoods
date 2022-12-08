import React from "react";
import Menuitem from "./Menuitem";
import pizzaimg from "../assets/pizza.png";
import saladimg from "../assets/salad.png";
import noodlesimg from "../assets/noodles.png";
import sandwitchimg from "../assets/sandwitch.png";
import pastaimg from "../assets/something.png";
import sushiimg from "../assets/sushi.png";
import friedchickenimg from "../assets/friedchicken.png";
import hotdogsimg from "../assets/hotdogs.png";

const menuitems = [
  {
    id: 1,
    img: hotdogsimg,
    title: "Hot Dogs",
    description:
      "lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
  },
  {
    id: 2,
    img: pizzaimg,
    title: "Pizza",
    description:
      "lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
  },
  {
    id: 3,
    img: friedchickenimg,
    title: "Fried Chicken",
    description:
      "lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
  },
  {
    id: 4,
    img: noodlesimg,
    title: "Noodles",
    description:
      "lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
  },
  {
    id: 5,
    img: sandwitchimg,
    title: "Sandwitch",
    description:
      "lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
  },
  {
    id: 6,
    img: pastaimg,
    title: "Pasta",
    description:
      "lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
  },
  {
    id: 7,
    img: sushiimg,
    title: "suchi",
    description:
      "lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
  },
  {
    id: 8,
    img: saladimg,
    title: "Salad",
    description:
      "lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
  },
];

const Menusection = () => {
  return (
    <React.Fragment>
      <section className="menusection" id="menu">
        <h2 className="menusectionheading">OUR FOODS</h2>
        {menuitems.map((menuitems, index) => {
          return (
            <Menuitem
              key={menuitems.id}
              img={menuitems.img}
              title={menuitems.title}
              description={menuitems.description}
            ></Menuitem>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default Menusection;
