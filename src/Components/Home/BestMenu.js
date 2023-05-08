import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  HStack,
  Text,
  Spacer,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BestMenu({ bestMenu }) {
  const [isLoading, setIsLoading] = useState(true);

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
            <Link to={`menu/${menu.id}`}>
              <Box
                key={menu._id}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                transition="all 0.2s"
                _hover={{ shadow: "lg" }}
              >
                <Skeleton isLoaded={!isLoading} h="250px">
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    w="100%"
                    h="250px"
                    onLoad={() => setIsLoading(false)}
                    display={isLoading ? "none" : "block"}
                  />
                </Skeleton>
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
            </Link>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
