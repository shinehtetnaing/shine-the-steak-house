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
  IconButton,
  Spacer,
  useDisclosure,
  VStack,
  Container,
  Badge,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { useMenu } from "../Context/MenuContext";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menuCount } = useMenu();

  return (
    <nav>
      <Flex
        alignItems="center"
        py="30px"
        borderBottom="1px solid"
        borderBottomColor="gray.300"
      >
        <Container display="flex" alignItems="center" maxW="container.xl">
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
          <HStack spacing={4}>
            <Link to="your-cart">
              <Box position="relative">
                <IconButton
                  aria-label="Cart"
                  colorScheme="red"
                  size="md"
                  variant="outline"
                  icon={<BsCart3 />}
                />
                <Badge
                  variant="solid"
                  colorScheme="red"
                  position="absolute"
                  top="-8px"
                  right="-8px"
                  borderRadius="full"
                  px={2}
                >
                  {menuCount}
                </Badge>
              </Box>
            </Link>
            <Link to="login">
              <Button colorScheme="red">Login</Button>
            </Link>
          </HStack>
        </Container>
      </Flex>
    </nav>
  );
}
