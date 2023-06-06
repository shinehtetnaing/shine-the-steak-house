import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import { useMenu } from "../../Context/MenuContext";
import { Link } from "react-router-dom";
import useSubmit from "../../Hooks/useSubmit";
import Alert from "../../Components/Alert";

export default function Cart() {
  const { alertMsg, isOpen, onClose, submit } = useSubmit("checkout");
  const { cart, getTotal, uniqueCartItems, menuCount, handleEmptyCart } =
    useMenu();
  const total = getTotal();
  const fixedTotal = total.toFixed(2);

  const items = uniqueCartItems.map((item) => (
    <CartItem key={item.id} data={item} />
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmptyCart();
    submit("https://example.com/checkout");
  };

  return (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
      <Alert isOpen={isOpen} onClose={onClose} alertMsg={alertMsg} />
      <form onSubmit={handleSubmit}>
        <Heading size="md" textAlign="center">
          Your Cart
        </Heading>
        {cart.length === 0 ? (
          <Box
            as="section"
            h="xs"
            mt={10}
            boxShadow="0px 0px 15px -3px rgba(0,0,0,0.1), 0px 0px 6px -2px rgba(0,0,0,0.05)"
          >
            <VStack justify="center" align="center" h="100%">
              <Text fontSize="3xl" mb={4}>
                Your cart is empty!
              </Text>
              <Link to="../menu">
                <Button colorScheme="red">Browse Menu</Button>
              </Link>
            </VStack>
          </Box>
        ) : (
          <Flex
            as="section"
            direction={{ base: "column", lg: "row" }}
            mt={10}
            boxShadow="0px 0px 15px -3px rgba(0,0,0,0.1), 0px 0px 6px -2px rgba(0,0,0,0.05)"
          >
            <Box
              py={{ base: "4", md: "8" }}
              px={{ base: "3", md: "6" }}
              w="100%"
            >
              <HStack pb={8} borderBottom="2px" borderColor="blackAlpha.300">
                <Heading size="md">Shopping Cart</Heading>
                <Spacer />
                <Heading size="sm">{`${menuCount} ${
                  menuCount !== 1 ? "Items" : "Item"
                }`}</Heading>
              </HStack>
              <Stack mb={{ base: "0", lg: "8" }}>{items}</Stack>
            </Box>
            <Box
              py={{ base: "4", md: "8" }}
              px={{ base: "3", md: "6" }}
              w={{ base: "100%", lg: "xl" }}
              bg="blackAlpha.200"
            >
              <Heading
                size="md"
                pb={8}
                borderBottom="2px"
                borderColor="blackAlpha.300"
              >
                Summary
              </Heading>
              <Stack
                pb={8}
                borderBottom="2px"
                borderColor="blackAlpha.300"
                my={8}
              >
                <HStack>
                  <Text as="b">Subtotal :</Text>
                  <Spacer />
                  <Text fontWeight="semibold">$ {fixedTotal}</Text>
                </HStack>
                <HStack>
                  <Text as="b">Discount :</Text>
                  <Spacer />
                  <Text fontWeight="semibold">$ 0</Text>
                </HStack>
              </Stack>
              <HStack mb={8}>
                <Text as="b">Total :</Text>
                <Spacer />
                <Text fontWeight="semibold" fontSize="lg">
                  $ {fixedTotal}
                </Text>
              </HStack>
              <Button type="submit" w="100%" colorScheme="red">
                Checkout
              </Button>
            </Box>
          </Flex>
        )}
      </form>
    </Container>
  );
}
