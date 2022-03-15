import { useState } from "react";

function useContactLogic() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = () => {};

  const handlers = { handleInputChange };
  return { handlers, name, email, message };
}

export default useContactLogic;
