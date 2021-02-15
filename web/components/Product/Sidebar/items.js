import React from "react";

import { Home, Compass, Tag, FileText, Bell, User } from "components/Icons";

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
  {
    title: "Bildirimler",
    icon: <Bell />,
    link: "/notifications",
  },
  {
    title: "Profil",
    icon: <User />,
    link: "/profile",
  },
];

export default sidebarLinkItems;
