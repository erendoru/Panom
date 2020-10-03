import React from "react";
import DropDownItem from "./DropDownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faAtlas } from "@fortawesome/free-solid-svg-icons";

function DropDownMenu() {
  const ıcon = <FontAwesomeIcon icon={faUserAlt} />;

  return (
    <div className="dropdown">
      <DropDownItem Icon={ıcon} href="/">
        Profil
      </DropDownItem>
      <DropDownItem Icon={ıcon} href="/about">
        Ayarlar
      </DropDownItem>
      <DropDownItem Icon={ıcon} href="/about">
        Profile
      </DropDownItem>
      <DropDownItem Icon={ıcon} href="/about">
        Profile
      </DropDownItem>
    </div>
  );
}

export default DropDownMenu;
