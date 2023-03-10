import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MenuDetails() {
  const [menu, setMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const fetchMenu = () => {
    fetch(`https://mock-steak-data-api.vercel.app/api/menu/${params.id}`)
      .then((response) => response.json())
      .then((data) => setMenu(data));
  };

  useEffect(() => {
    fetchMenu();
  }, [params.id]);

  return (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
      {menu ? (
        <>
          <Heading size="md" textAlign="center">
            {menu.name}
          </Heading>
          <Box as="section" mt={10}>
            <Flex direction={{ base: "column", lg: "row" }} gap={8}>
              <Box>
                <Skeleton isLoaded={!isLoading} h={{ base: "sm", sm: "md" }}>
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    borderRadius="lg"
                    h={{ base: "sm", sm: "md" }}
                    onLoad={() => setIsLoading(false)}
                    display={isLoading ? "none" : "block"}
                  />
                </Skeleton>
              </Box>
              <Box w={{ base: "auto", lg: "50%" }} py={6}>
                <VStack
                  alignItems="flex-start"
                  justifyContent="space-between"
                  spacing={6}
                >
                  <Tag variant="outline" fontSize="lg" colorScheme="red" p={2}>
                    $ {menu.price}
                  </Tag>
                  <Text fontSize="2xl">{menu.description}</Text>
                  <Button colorScheme="red">Add to Cart</Button>
                </VStack>
              </Box>
            </Flex>
          </Box>
        </>
      ) : (
        <Box as="section" mt={10}>
          <Flex direction={{ base: "column", lg: "row" }} gap={8}>
            <Box w={{ base: "auto", lg: "50%" }}>
              <Skeleton w="100%" h={{ base: "sm", sm: "md" }}></Skeleton>
            </Box>
            <Box w={{ base: "auto", lg: "50%" }} py={6}>
              <VStack
                alignItems="flex-start"
                justifyContent="space-between"
                spacing={6}
              >
                <Skeleton w="50px" h="50px" />
                <Box w="100%">
                  <SkeletonText noOfLines={4} spacing="4" skeletonHeight="4" />
                </Box>
                <Skeleton w="120px" h="40px" />
              </VStack>
            </Box>
          </Flex>
        </Box>
      )}
    </Container>
  );
}
