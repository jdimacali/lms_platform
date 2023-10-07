"use client";

import { BarChart2, Compass, Layout, List } from "lucide-react";
import SidebarItem from "./SidebarItem";
import path from "path";
import { usePathname } from "next/navigation";

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

const teacherRoutes = [
  {
    href: "/teacher/courses",
    label: "Courses",
    icon: List,
  },
  {
    href: "/teacher/analytics",
    label: "Analytics",
    icon: BarChart2,
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

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
