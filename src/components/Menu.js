import React from "react";
import menuItems from "../data.js";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <>
      <div className="title">
        <h1>This Week's Specials</h1>
      </div>

      <div className="section-center">
        {menuItems.map((menuItem) => (
          <article key={menuItem.id} className="menu-item">
            <img src={menuItem.img} alt={menuItem.title} className="photo" />

            <div className="item-info">
              <header>
                <h4>{menuItem.title}</h4>
                <h4 className="price">${menuItem.price}</h4>
              </header>

              <p className="item-text">{menuItem.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Menu;
