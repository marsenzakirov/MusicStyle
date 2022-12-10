import React from "react";

type Props = {
  buttonChildren: React.ReactNode;
  children: React.ReactNode;
};

export default function Modal({ buttonChildren, children }: Props) {
  return (
    <div>
      <label htmlFor="my-modal-4" className="cursor-pointer">
        {buttonChildren}
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle " />
      <label
        htmlFor="my-modal-4"
        className="modal cursor-pointer rounded-[20px] "
      >
        <label className="modal-box relative bg-[#360b56]" htmlFor="">
          {children}
        </label>
      </label>
    </div>
  );
}
