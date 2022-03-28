import { useState } from "react";
import emailjs from "@emailjs/browser";

function useContactLogic() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("error");
  const [formErrors, setFormErrors] = useState({});
  const [formTouched, setFormTouched] = useState({
    email: false,
    name: false,
    message: false,
  });

  const handleMessageError = () => setMessageStatus("error");
  const handleMessageSuccess = () => setMessageStatus("success");
  const handleMessageLoading = () => setMessageStatus("loading");
  const resetMessageStatus = () => setMessageStatus("");

  const handleFormFieldBlur = (e) => {
    validateFormFields();
    const { name } = e.target;
    setFormTouched((prev) => ({ ...prev, [name]: true }));
  };

  const resetFormErrors = () => setFormErrors(null);

  const setAllFormFieldAsTouched = () => {
    setFormTouched({ email: true, name: true, message: true });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateFormFields = () => {
    const errObj = {};
    if (!email) {
      errObj.email = "Please provide your email";
    } else errObj.email = "";

    if (!validateEmail(email)) {
      errObj.email = "Please provide valid email";
    } else errObj.email = "";

    if (!name) {
      errObj.name = "Please provide your name";
    } else errObj.name = "";

    if (!message) {
      errObj.message = "Please provide a message";
    } else errObj.message = "";

    setFormErrors(errObj);
    if (errObj.name || errObj.email || errObj.message) {
      return false;
    }
    return true;
  };

  const handleInputChange = (value, field) => {
    validateFormFields();
    const fields = {
      name: () => setName(value),
      email: () => setEmail(value),
      message: () => setMessage(value),
    };

    fields[field]();
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    resetMessageStatus();
    resetFormErrors();
    setAllFormFieldAsTouched();

    if (!validateFormFields()) return;
    handleMessageLoading();

    emailjs
      .send("service_rm2ep9d", "template_5879a6p", {
        from_name: name,
        reply_to: email,
        message,
      })
      .then((res) => {
        console.log(res);
        handleMessageSuccess();
      })
      .catch((err) => {
        handleMessageError();
        console.log(err);
      });
  };

  const handlers = {
    handleInputChange,
    handleMessageSubmit,
    handleFormFieldBlur,
  };
  return {
    handlers,
    name,
    email,
    message,
    messageStatus,
    formErrors,
    formTouched,
  };
}

export default useContactLogic;
