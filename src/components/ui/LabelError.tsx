import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface Props {
  condition: boolean;
  children: React.ReactNode;
}

export default function LabelError({
  condition,
  children,
}: Props): React.ReactElement {
  const nodeRef = React.useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={condition}
      timeout={100}
      classNames="my-node"
    >
      <span ref={nodeRef} className="text-[#db2626] ">
        {children}
      </span>
    </CSSTransition>
  );
}
