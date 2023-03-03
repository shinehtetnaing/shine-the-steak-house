import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  useDisclosure,
  VStack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav>
      <Flex
        alignItems="center"
        py="30px"
        borderBottom="1px solid"
        borderBottomColor="gray.300"
      >
        <Container display="flex" maxW="container.xl">
          <Icon
            as={HamburgerIcon}
            boxSize={6}
            display={{ base: "block", lg: "none" }}
            onClick={onOpen}
          />
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <VStack spacing={12} fontSize="lg" fontWeight="medium">
                  <NavLink to="/" onClick={onClose}>
                    Home
                  </NavLink>
                  <NavLink to="about" onClick={onClose}>
                    About
                  </NavLink>
                  <NavLink to="menu" onClick={onClose}>
                    Menu
                  </NavLink>
                  <NavLink to="reservation" onClick={onClose}>
                    Reservation
                  </NavLink>
                  <NavLink to="contact" onClick={onClose}>
                    Contact
                  </NavLink>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Spacer display={{ base: "flex", lg: "none" }} />
          <Heading as="h1" size="lg">
            <Link to="/">Restaurant</Link>
          </Heading>
          <Spacer />
          <HStack
            spacing={12}
            fontSize="lg"
            fontWeight="medium"
            display={{ base: "none", lg: "flex" }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="menu">Menu</NavLink>
            <NavLink to="reservation">Reservation</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </HStack>
          <Spacer display={{ base: "none", lg: "flex" }} />
          <HStack>
            <NavLink to="login">
              <Button colorScheme="red">Login</Button>
            </NavLink>
          </HStack>
        </Container>
      </Flex>
    </nav>
  );
}
