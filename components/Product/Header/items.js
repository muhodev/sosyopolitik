import React from "react";

import { Home, Compass, FileText, Bell } from "components/Icons";

const sidebarLinkItems = [
  {
    title: "Ana Sayfa",
    icon: <Home />,
    link: "/",
  },
  {
    title: "Keşfet",
    icon: <Compass />,
    link: "/explore",
  },
  {
    title: "Listeler",
    icon: <FileText />,
    link: "/lists",
  },
];

export default sidebarLinkItems;
