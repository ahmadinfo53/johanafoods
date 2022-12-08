import React, { useState } from "react";
import items from "../data/Restaurents";
import Restaurentsdetails from "./Restaurentsdetails";
import Restaurentslocations from "./Restaurentslocations";
import "../../src/App.css";

const allCities = ["All", ...new Set(items.map((item) => item.city))];

const Restaurents = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [cities] = useState(allCities);

  const filterItems = (city) => {
    if (city === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.city === city);
    setMenuItems(newItems);
  };

  return (
    <React.Fragment>
      <section id="locations" className="restaurentsection">
        <h2 className="restaurentsectitle">Our Restaurents</h2>
        <section className="restaurentsbuttonssec">
          <Restaurentslocations cities={cities} filterItems={filterItems} />
        </section>
        <section className="restaurentsdetailssec">
          <Restaurentsdetails items={menuItems} />
        </section>
      </section>
    </React.Fragment>
  );
};

export default Restaurents;
