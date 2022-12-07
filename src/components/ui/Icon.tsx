import Image from "next/future/image";

const req = require["context"]("../../assets/icons", true, /\.svg$/);
// cut half an array
const icons = req
  .keys()
  .slice(0, req.keys().length / 2)
  .map((key) => {
    const name = key.replace("./", "").replace(".svg", "");
    return {
      name,
      component: req(key).default,
    };
  });

type IconProps = {
  name: string;
  size: number;
  alt: string;
};

export default function Icon({ name, size, alt }: IconProps) {
  const icon = icons.find((icon) => icon.name === name);
  if (!icon) {
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
