import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  VStack,
  useNumberInput,
} from "@chakra-ui/react";
import { BiTrash, BiX } from "react-icons/bi";
import { useMenu } from "../../Context/MenuContext";

export default function CartItem({ data }) {
  const { cart, addToCart, removeFromCart, deleteMenu } = useMenu();

  const filteredSameId = cart.filter((item) => item.id === data.id);
  const sameIdQty = filteredSameId.length;

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const priceById = () => {
    return (data.price * input.value).toFixed(2);
  };

  return (
    <Box py={8} borderBottom="2px" borderColor="blackAlpha.300">
      <HStack
        justifyContent="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Image
          boxSize="80px"
          objectFit="cover"
          src={data.image}
          alt={data.name}
        />
        <VStack>
          <Text fontSize="xl" textAlign="center" w="120px">
            {data.name}
          </Text>
          <Text fontSize="xl" fontWeight="semibold">
            {priceById()}
            {/* {data.price} */}
          </Text>
        </VStack>
        <VStack alignItems="end">
          <IconButton
            aria-label="Delete"
            colorScheme="red"
            variant="ghost"
            size="sm"
            icon={<BiX />}
            onClick={() => deleteMenu(data)}
          />
          <HStack spacing={1}>
            <Button {...inc} size="sm" p={2} onClick={() => addToCart(data)}>
              +
            </Button>
            <Input {...input} boxSize="35px" p={2} value={sameIdQty} />
            <Button
              {...dec}
              size="sm"
              p={2}
              onClick={() => {
                if (sameIdQty !== 1) {
                  removeFromCart(data);
                }
              }}
              disabled={sameIdQty === 1}
            >
              -
            </Button>
          </HStack>
        </VStack>
      </HStack>
      {/* screen larger than md size */}
      <HStack
        justifyContent="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Image
          boxSize="100px"
          objectFit="cover"
          src={data.image}
          alt={data.name}
        />
        <HStack>
          <Button {...inc} onClick={() => addToCart(data)}>
            +
          </Button>
          <Input {...input} w="55px" value={sameIdQty} />
          <Button
            {...dec}
            onClick={() => {
              if (sameIdQty !== 1) {
                removeFromCart(data);
              }
            }}
            disabled={sameIdQty === 1}
          >
            -
          </Button>
        </HStack>
        <Text fontSize="xl" textAlign="center" w="120px">
          {data.name}
        </Text>
        <Text fontSize="xl" fontWeight="semibold">
          {priceById()}
          {/* {data.price} */}
        </Text>
        <IconButton
          aria-label="Delete"
          colorScheme="red"
          variant="outline"
          size="md"
          icon={<BiTrash />}
          onClick={() => deleteMenu(data)}
        />
      </HStack>
    </Box>
  );
}
