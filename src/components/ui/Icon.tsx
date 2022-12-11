import Image from 'next/future/image';

const req = require.context('../../assets/icons', true, /\.svg$/);

interface IconInterface {
  name: string;
  component: string;
}

const icons = [] as IconInterface[];
for (let i = 0; i < req.keys().length / 2; i++) {
  const name = req.keys()[i].replace('./', '').replace('.svg', '');
  icons.push({
    name,
    component: req(req.keys()[i]).default,
  });
}

interface IconProps {
  name: string;
  size: number;
  alt: string;
}

export default function Icon({
  name,
  size,
  alt,
}: IconProps): React.ReactElement | null {
  const icon = icons.find((icon) => icon.name === name);
  if (icon === undefined) {
    return null;
  }
  return (
    <Image
      src={icon.component}
      width={size}
      height={size}
      draggable="false"
      alt={alt}
    />
  );
}
