import React from "react";
import "../../src/App.css";

const Menuitem = (props) => {
  const { img, title, description } = props;
  return (
    <div className="menuitemdiv">
      <div className="menuitem">
        <img className="menuitemimg" src={img} alt="" />
        <h2 className="menuitemtitle">{title}</h2>
        <p className="menuitemdescription">{description}</p>
      </div>
    </div>
  );
};

export default Menuitem;
