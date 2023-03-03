import { FiClock, FiMail, FiMap, FiPhone } from "react-icons/fi";
import { Flex, Grid, GridItem, Heading, Icon, Text, VStack } from "@chakra-ui/react";

const contactInfo = [
  {
    header: "our address",
    text: "A108 Adam Street, New York, NY 535022",
    icon: FiMap,
  },
  {
    header: "email us",
    text: "contact@example.com",
    icon: FiMail,
  },
  {
    header: "call us",
    text: "+1 5589 55488 55",
    icon: FiPhone,
  },
  {
    header: "opening hour",
    text: "Everyday: 9AM - 22PM",
    icon: FiClock,
  },
];

export default function ContactInfo() {
  return (
    <Grid
      templateRows={{ base: "repeat(4, 1fr)", lg: "repeat(2, 1fr)" }}
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={6}
      py={10}
    >
      {contactInfo.map(info => (
        <GridItem bg="#f4f4f4" key={info.header}>
            <Flex p={{ base: 2, md: 10 }} alignItems="center" justifyContent="flex-start">
                <Flex bg="red" borderRadius="50%" justifyContent="center" p={4} mr={4}>
                    <Icon as={info.icon} color="white" boxSize={{ base: 5, md: 8 }} />
                </Flex>
                <VStack color="blackAlpha.800" justifyContent="start">
                    <Heading as="h5" size="sm" textTransform="capitalize" alignSelf="start">
                        {info.header}
                    </Heading>
                    <Text>
                        {info.text}
                    </Text>
                </VStack>
            </Flex>
        </GridItem>
      ))}
    </Grid>
  );
}
