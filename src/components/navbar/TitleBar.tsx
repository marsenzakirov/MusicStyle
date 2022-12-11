import React from 'react';
import { appWindow } from '@tauri-apps/api/window';
import { Icon } from '@components/ui';

export default function TitleBar(): React.ReactElement {
  const close = async (): Promise<void> => {
    await appWindow.close();
  };

  const invert = async (): Promise<void> => {
    await appWindow.isFullscreen().then(async (isFullscreen) => {
      if (isFullscreen) {
        await appWindow.unmaximize();
      } else {
        await appWindow.maximize();
      }
    });
  };

  const minimize = async (): Promise<void> => {
    await appWindow.minimize();
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
  func: () => Promise<void>;
}): React.ReactElement => {
  return (
    <button
      className="w-4 h-4 rounded-full "
      onClick={() => {
        void func();
      }}
    >
      <Icon name={name} size={20} alt={alt} />
    </button>
  );
};
