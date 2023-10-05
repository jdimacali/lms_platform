"use client";

import { Compass, Layout } from "lucide-react";
import SidebarItem from "./SidebarItem";

const guestRoutes = [
  {
    href: "/",
    label: "Dashboard",
    icon: Layout,
  },
  {
    href: "/search",
    label: "Browse",
    icon: Compass,
  },
];

const SidebarRoutes = () => {
  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
export default SidebarRoutes;
