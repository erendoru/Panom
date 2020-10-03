import React, { useState } from "react";

function Profile(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-profile" onClick={() => setOpen(!open)}>
      {open && props.children}
    </div>
  );
}

export default Profile;
