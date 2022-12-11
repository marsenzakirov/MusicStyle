import React from 'react';
import Auth from './Auth';

export default function Header({ title }): React.ReactElement {
  return (
    <div className="flex justify-end h-20 items-center px-8">
      <Auth />
    </div>
  );
}
