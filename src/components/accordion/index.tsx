import { ReactNode, useState } from "react";
import ArrowDown from "../icons/arrow-down";
import "./style.css";
import clsx from "clsx";

type Props = {
  title: string;
  children: ReactNode;
  open?: boolean;
};

function Accordion({ title, children, open }: Props) {
  const [isClicked, setIsClicked] = useState(open ?? false);
  return (
    <>
      <button
        className="accordion-trigger"
        onClick={() => {
          setIsClicked((prev) => !prev);
        }}
      >
        <span>{title}</span>
        <ArrowDown
          className={clsx("accordion-arrow", isClicked && "active-state")}
        />
      </button>
      <div className={clsx("accordion-content", isClicked && "active")}>
        {children}
      </div>
    </>
  );
}

export default Accordion;
