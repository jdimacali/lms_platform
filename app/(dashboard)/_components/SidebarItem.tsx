"use client";

import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const isActive =
    (pathName === "/" && href === "/") ||
    (pathName === href && pathName?.startsWith(`${href}/`));

  const onClick = () => {
    router.push(href);
  };

  return (
    <div>
      <Icon />
    </div>
  );
};
export default SidebarItem;
