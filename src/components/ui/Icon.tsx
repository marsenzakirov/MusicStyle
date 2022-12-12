import Image from 'next/future/image';

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
  return (
    <Image
      src={`/icons/${name}.svg`}
      width={size}
      height={size}
      draggable="false"
      alt={alt}
    />
  );
}
