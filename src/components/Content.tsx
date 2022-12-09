import React from "react";

export default function Content({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(203.65deg, rgba(49, 0, 88, 0.89) 20.64%, rgba(27, 7, 38, 0.89) 84.77%)",
      }}
      className="w-full"
    >
      {children}
    </div>
  );
}
