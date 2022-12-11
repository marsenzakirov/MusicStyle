import React from 'react';
import Header from '@components/Header';

export default function Content({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactElement {
  return (
    <div
      style={{
        background:
          'linear-gradient(203.65deg, rgba(49, 0, 88, 0.89) 20.64%, rgba(27, 7, 38, 0.89) 84.77%)',
      }}
      className="w-full"
    >
      <Header title="My App" />
      {children}
    </div>
  );
}
