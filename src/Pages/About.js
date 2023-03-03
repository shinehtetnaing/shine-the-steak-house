import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiCheckDouble } from "react-icons/bi";
import { useState } from "react";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
      <Heading size="md" textAlign="center">
        About Us
      </Heading>
      <Flex
        as="section"
        direction={{ base: "column", lg: "row" }}
        mt={10}
        gap={8}
      >
        <Box w={{ lg: "container.xl" }} position="relative">
          <Skeleton isLoaded={!isLoading} h="100%">
            <Image
              objectFit="cover"
              src={require("../Assets/Images/about.jpg")}
              alt="About us"
              h="100%"
              onLoad={() => setIsLoading(false)}
              display={isLoading ? "none" : "block"}
            />
          </Skeleton>
          <Box
            bg="white"
            w="80%"
            textAlign="center"
            py={4}
            position="absolute"
            bottom={{ base: "15px", md: 4 }}
            left="50%"
            transform={{
              base: "translate(-50%, -15%)",
              md: "translate(-50%, -50%)",
            }}
          >
            <Heading as="h4" fontSize="2xl">
              Book a Table
            </Heading>
            <Text fontSize="2xl" fontWeight="bold" color="red.500">
              +1 5589 55488 55
            </Text>
          </Box>
        </Box>
        <Box w={{ lg: "container.md" }}>
          <VStack spacing={6} alignItems="start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <List spacing={3}>
              <ListItem position="relative" pl="30px">
                <ListIcon
                  as={BiCheckDouble}
                  color="red.500"
                  fontSize="2xl"
                  position="absolute"
                  left={0}
                />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ListItem>
              <ListItem position="relative" pl="30px">
                <ListIcon
                  as={BiCheckDouble}
                  color="red.500"
                  fontSize="2xl"
                  position="absolute"
                  left={0}
                />
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </ListItem>
              <ListItem position="relative" pl="30px">
                <ListIcon
                  as={BiCheckDouble}
                  color="red.500"
                  fontSize="2xl"
                  position="absolute"
                  left={0}
                />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </ListItem>
            </List>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
            <Skeleton isLoaded={!isLoading} h="100%">
              <Image
                objectFit="cover"
                src={require("../Assets/Images/about-2.jpg")}
                alt="About us"
                onLoad={() => setIsLoading(false)}
                display={isLoading ? "none" : "block"}
              />
            </Skeleton>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}
