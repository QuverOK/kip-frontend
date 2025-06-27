"use client";
import { motion } from "framer-motion";
import { NavigationItem } from "./navigation-item";
import { NavigationItem as NavigationItemType } from "../container/sidebar";

type SidebarNavigationProps = {
  navigationList: NavigationItemType[];
};

export function SidebarNavigation({ navigationList }: SidebarNavigationProps) {
  return (
    <nav>
      <ul className="flex flex-col">
        {navigationList.map((navigationItem) => (
          <motion.li
            key={navigationItem.title}
            whileHover={
              !navigationItem.isActive
                ? {
                    scale: 1.05,
                    backgroundColor: "#ebf6fd",
                    boxShadow: "0px 4px 15px rgba(52, 152, 219, 0.4)",
                  }
                : {}
            }
            whileTap={!navigationItem.isActive ? { scale: 0.95 } : {}}
            transition={{
              ease: "linear",
              duration: 0.2,
            }}
          >
            <NavigationItem
              title={navigationItem.title}
              href={navigationItem.url}
              isActive={navigationItem.isActive}
            />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
