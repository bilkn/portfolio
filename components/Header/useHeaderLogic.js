import React, { useState } from "react";

function useHeaderLogic() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const handlers = {
    toggleMenu,
  };

  return { showMenu, handlers };
}

export default useHeaderLogic;
