import React, { useEffect } from "react";
import { appWindow } from "@tauri-apps/api/window";
import { Icon } from "@components/ui";

export default function TitleBar() {
  const close = () => {
    appWindow.close();
  };
  const invert = () => {
    appWindow.isFullscreen().then((isFullscreen) => {
      if (isFullscreen) {
        appWindow.unmaximize();
      } else {
        appWindow.maximize();
      }
    });
  };

  const minimize = () => {
    appWindow.minimize();
  };
  return (
    <div className="flex items-center justify-center justify-between">
      <button onClick={() => close()}>
        <Icon name="redEllipse" size={15} alt="close" />
      </button>
      <button onClick={() => invert()}>
        <Icon name="orangeEllipse" size={15} alt="maximize" />
      </button>
      <button onClick={() => minimize()}>
        <Icon name="greenEllipse" size={15} alt="minimize" />
      </button>
    </div>
  );
}
