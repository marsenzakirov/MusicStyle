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
      <TitleBarButton name="redEllipse" alt="Close" func={close} />
      <TitleBarButton name="orangeEllipse" alt="Minimize" func={invert} />
      <TitleBarButton name="greenEllipse" alt="Maximize" func={minimize} />
    </div>
  );
}

const TitleBarButton = ({
  name,
  alt,
  func,
}: {
  name: string;
  alt: string;
  func: () => void;
}) => {
  return (
    <button className="w-4 h-4 rounded-full " onClick={() => func()}>
      <Icon name={name} size={20} alt={alt} />
    </button>
  );
};
