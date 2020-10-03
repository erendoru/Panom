import React from "react";
import Link from "next/link";

function DropDownItem(props) {
  return (
    <Link href={props.href} className="menu-item">
      <div className="menu-element">
        <span className="icon-button">{props.Icon}</span>
        {props.children}
      </div>
    </Link>
  );
}

export default DropDownItem;
