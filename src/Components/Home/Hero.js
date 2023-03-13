import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Heading,
  Text,
  HStack,
  Skeleton,
} from "@chakra-ui/react";
import { BiPlayCircle } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box as="section" bg="blackAlpha.200">
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <Flex
          as="section"
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: "column-reverse", lg: "row" }}
          rowGap={6}
          columnGap="3rem"
        >
          <Box
            w={{ base: "auto", md: "md" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Heading
              textTransform="uppercase"
              fontSize={{ base: "2xl", sm: "4xl" }}
              lineHeight={{ base: "normal", sm: "tall" }}
              mb={4}
            >
              Enjoy your healthy delicious food
            </Heading>
            <Text mb={6} color="blackAlpha.700">
              Sed autem laudantium dolores. Voluptatem itaque ea consequatur
              eveniet. Eum quas beatae cumque eum quaerat.
            </Text>
            <HStack
              spacing={6}
              justifyContent={{ base: "center", lg: "start" }}
            >
              <Link to="reservation">
                <Button colorScheme="red">Book a Table</Button>
              </Link>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <Flex
                  alignItems="center"
                  _hover={{
                    "& svg": {
                      color: "#df4d4d",
                    },
                    "& p": {
                      color: "#df4d4d",
                    },
                  }}
                >
                  <Icon as={BiPlayCircle} boxSize={8} color="red.500" mr={1} />
                  <Text
                    display="flex"
                    alignItems="center"
                    fontWeight="semibold"
                  >
                    Watch Video
                  </Text>
                </Flex>
              </a>
            </HStack>
          </Box>
          <Box w={{ base: "auto", sm: "sm", md: "lg" }}>
            <Skeleton isLoaded={!isLoading} h="100%">
              <Image
                objectFit="cover"
                src={require("../../Assets/Images/hero-img.png")}
                alt="Hero Image"
                h="100%"
                onLoad={() => setIsLoading(false)}
                display={isLoading ? "none" : "block"}
              />
            </Skeleton>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
