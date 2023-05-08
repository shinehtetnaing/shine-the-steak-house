import { Container, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function MenuLayout() {
  return (
    <div>
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <Heading size="md" textAlign="center">
          Our Menu
        </Heading>
        <Outlet />
      </Container>
    </div>
  );
}
