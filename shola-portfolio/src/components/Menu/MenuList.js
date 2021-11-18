import React from "react";

function MenuList({ menuOpen, setMenuOpen, openMenu }) {
  const list = [
    {
      id: "intro",
      title: "Home",
    },
    {
      id: "about",
      title: "About me",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const listRender = list.map((item) => {
    return (
      <li key={item.id} onClick={() => setMenuOpen(false)}>
        <a href={`#${item.id}`}>{item.title}</a>
      </li>
    );
  });
  return <ul>{listRender}</ul>;
}

export default MenuList;
