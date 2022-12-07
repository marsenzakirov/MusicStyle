import dynamic from "next/dynamic";

const TitleBar = dynamic(
  () => {
    return import("./TitleBar");
  },
  { ssr: false }
);

export default function NavBar() {
  return (
    <div
      data-tauri-drag-region
      style={{
        background:
          "linear-gradient(146.56deg, rgba(53, 44, 44, 0.2) 12.85%, rgba(40, 9, 72, 0.2) 48.42%), linear-gradient(12.28deg, #140424 8.75%, #270846 58.87%)",
      }}
      className="w-24 h-screen p-3"
    >
      <TitleBar />
    </div>
  );
}
