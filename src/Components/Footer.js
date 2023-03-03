import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { FiMapPin, FiPhone, FiClock, FiHeart } from "react-icons/fi";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const footerContactInfo = [
    {
      header: "address",
      text: "A108 Adam Street New York, NY 535022 - US",
      icon: FiMapPin,
    },
    {
      header: "reservations",
      text: "Phone: +1 5589 55488 55 Email: info@example.com",
      icon: FiPhone,
    },
    {
      header: "opening hours",
      text: "Everyday: 9 AM - 22 PM",
      icon: FiClock,
    },
  ];

  const footerSocials = [FaTwitter, FaFacebook, FaInstagram, FaLinkedin];

  return (
    <footer>
      <Box bg="blackAlpha.800" color="whiteAlpha.800" py={16}>
        <Container maxW="container.xl">
          <Grid
            templateRows={{
              base: "repeat(5, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={{ base: 2, md: 6 }}
          >
            {footerContactInfo.map((info) => (
              <GridItem maxH="100px" key={info.header}>
                <Flex
                  alignItems="start"
                  justifyContent={{ base: "start", lg: "center" }}
                >
                  <Box mr={4}>
                    <Icon as={info.icon} boxSize={6} />
                  </Box>
                  <Box w={{ md: "auto", lg: "182px" }}>
                    <Heading
                      as="h5"
                      size="sm"
                      textTransform="capitalize"
                      color="white"
                      mb={3}
                    >
                      {info.header}
                    </Heading>
                    <Text>{info.text}</Text>
                  </Box>
                </Flex>
              </GridItem>
            ))}
            <GridItem>
              <Flex
                alignItems="start"
                justifyContent={{ base: "start", lg: "center" }}
              >
                <Box mr={4}>
                  <Icon as={FiHeart} boxSize={6} />
                </Box>
                <Box>
                  <Heading
                    as="h5"
                    size="sm"
                    textTransform="capitalize"
                    color="white"
                    mb={3}
                  >
                    follow us
                  </Heading>
                  <ButtonGroup variant="outline">
                    <HStack>
                      {footerSocials.map((social) => (
                        <Button
                          colorScheme="whiteAlpha"
                          borderRadius="50%"
                          size="sm"
                          key={social}
                        >
                          <Icon as={social} />
                        </Button>
                      ))}
                    </HStack>
                  </ButtonGroup>
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              colSpan={{ base: 1, md: 2, lg: 4 }}
              borderTop="1px solid"
              pt="25px"
            >
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                h="100%"
              >
                <Text>
                  © Copyright <strong>Yummy</strong>. All Rights Reserved
                </Text>
                <Text>
                  Designed by{" "}
                  <Link
                    href="https://bootstrapmade.com/demo/Yummy/"
                    color="white"
                    isExternal
                  >
                    BootstrapMade
                  </Link>
                </Text>
                <Text>
                  Build by{" "}
                  <Link
                    href="https://github.com/shinehtetnaing/"
                    color="white"
                    isExternal
                  >
                    ShineHtetNaing
                  </Link>
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
