import { useState } from "react";

function useContactLogic() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (value, field) => {
    const fields = {
      name: () => setName(value),
      email: () => setEmail(value),
      message: () => setMessage(value),
    };

    fields[field]();
  };

  const handlers = { handleInputChange };
  return { handlers, name, email, message };
}

export default useContactLogic;
