import React, { Children } from "react";
import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MiniButton() {
  const icon = <FontAwesomeIcon icon={faAngleRight} color="white" />;
  return (
    <div className="button">
      <Link href="/tasarım">
        <button className="mini-button">{icon}</button>
      </Link>
    </div>
  );
}

export default MiniButton;
