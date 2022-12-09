import { Icon } from "@components/ui";
import React from "react";

export default function Navigation() {
  return (
    <div className="flex flex-col gap-6">
      <NavigationButton name="home" alt="Home" />
      <NavigationButton name="search" alt="Search" />
      <NavigationButton name="heart" alt="favorites" />
    </div>
  );
}

const NavigationButton = ({ name, alt }: { name: string; alt: string }) => {
  return (
    <button
      style={{
        background:
          "radial-gradient(103.75% 103.75% at 50% 50%, #300E77 0%, rgba(29, 19, 51, 0) 100%)",
      }}
      className="w-14 h-14 rounded-full border-[2px] border-solid border-[#00DAE8] flex items-center justify-center"
    >
      <Icon name={name} size={20} alt={alt} />
    </button>
  );
};
