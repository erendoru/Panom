import React from "react";
import MiniButton from "./MiniButton";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HowTo(props) {
  const close = <FontAwesomeIcon icon={faTimes} className="icon" />;

  return (
    <div className="howcard">
      <div className="title-side">
        <h1>Nasıl Kullanılır</h1>
      </div>
      <ul>
        <li>Kiralamak istediğiniz pano lokasyonunu seçin.</li>
        <li>
          Bilgileri kontrol edin ve sizden istenen boyut ve özelliklerde
          görselleri yükleyin.{" "}
          <span className="design-info">
            Tasarım hakkında bilgi için <MiniButton />
          </span>
        </li>
        <li>
          Ödemenizi tamamladıktan sonra belirlediğiniz tarihlerde reklamınız
          panomuzda.
        </li>
      </ul>
      <button className="btn-anladım" onClick={props.click}>
        Tamam
      </button>
    </div>
  );
}

export default HowTo;
