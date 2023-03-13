import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const Chefs = [
  {
    imageSrc: () => require("../../Assets/Images/chefs-1.jpg"),
    name: "walter white",
    role: "master chef",
    about:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
  },
  {
    imageSrc: () => require("../../Assets/Images/chefs-2.jpg"),
    name: "sarah jhonson",
    role: "patissier",
    about:
      "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
  },
  {
    imageSrc: () => require("../../Assets/Images/chefs-3.jpg"),
    name: "william anderson",
    role: "cook",
    about:
      "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
  },
];

export default function Chef() {
  return (
    <Box as="section" bg="blackAlpha.200">
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <Heading size="md" textAlign="center">
          Our Chefs
        </Heading>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: 8, lg: 4 }}
          mt={10}
        >
          {Chefs.map((chef) => (
            <Box
              key={chef.name}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              bgColor="white"
              overflow="hidden"
            >
              <Image src={chef.imageSrc()} alt={chef.name} w="100%" h="350px" />
              <VStack spacing={4} p={6}>
                <VStack spacing={1} textTransform="capitalize">
                  <Heading as="h6" size="md">
                    {chef.name}
                  </Heading>
                  <Text color="blackAlpha.500">{chef.role}</Text>
                </VStack>
                <Text color="blackAlpha.700">{chef.about}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
