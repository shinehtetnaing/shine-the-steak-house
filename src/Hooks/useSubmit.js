import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

const useSubmit = (formType) => {
  const [alertMsg, setAlertMsg] = useState({
    header: "",
    body: "",
  });
  const { onOpen, isOpen, onClose } = useDisclosure();

  const submit = (url, data) => {
    if (formType === "reservation") {
      setAlertMsg({
        ...alertMsg,
        header: "Thank you for your reservation!",
        body: `Thank you for booking with us, ${data.name}! We'll be in touch to confirm your reservation and answer any questions. We can't wait to see you soon!`,
      });
    }
    if (formType === "contact") {
      setAlertMsg({
        ...alertMsg,
        header: "We've got your message!",
        body: "Thank you for reaching out to us. We have received your message and our team will be reviewing it shortly. We appreciate your interest in our restaurant and we'll do our best to get back to you as soon as possible.",
      });
    }
    onOpen();
  };

  return { alertMsg, isOpen, onClose, submit };
};

export default useSubmit;
