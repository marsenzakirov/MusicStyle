import React from "react";
import { Modal } from "@ui";
import Auth from "./Auth";


export default function Header({ title }) {
  return (
    <div className="flex justify-end h-20 items-center px-8">
      <Auth />
    </div>
  );
}
