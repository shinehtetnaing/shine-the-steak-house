import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";

function Alert({ isOpen, onClose, alertMsg }) {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {alertMsg.header}
          </AlertDialogHeader>
          <AlertDialogBody mb={6}>{alertMsg.body}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
