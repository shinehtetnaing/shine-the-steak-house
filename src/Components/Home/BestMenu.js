import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  HStack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function BestMenu() {
  const [bestMenu, setBestMenu] = useState([]);

  const fetchBestMenu = () => {
    fetch("https://mock-steak-data-api.vercel.app/api/steaks")
      .then((response) => response.json())
      .then((data) => {
        const randomItems = data.sort(() => 0.5 - Math.random()).slice(0, 3);
        setBestMenu(randomItems);
      });
  };

  useEffect(() => {
    fetchBestMenu();
  }, []);

  return (
    <Box as="section">
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <Heading size="md" textAlign="center">
          Best Selling Steaks
        </Heading>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: 8, lg: 4 }}
          mt={10}
        >
          {bestMenu.map((menu) => (
            <Box
              key={menu._id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={menu.image} alt={menu.name} w="100%" h="250px" />
              <HStack p={6}>
                <Heading as="h6" size="md">
                  {menu.name}
                </Heading>
                <Spacer />
                <Text color="red.400" fontWeight="medium">
                  ${menu.price}
                </Text>
              </HStack>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
