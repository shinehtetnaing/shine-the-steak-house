import { Container, Heading } from "@chakra-ui/react";
import ReservationForm from "../Components/ReservationForm";

export default function Reservation() {
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
      <Heading size="md" textAlign="center">
        Reservation
      </Heading>
      <ReservationForm />
    </Container>
  );
}
