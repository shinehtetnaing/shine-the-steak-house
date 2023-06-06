import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { getMenuDetail } from "../api";
import { useMenu } from "../Context/MenuContext";

export function loader({ params }) {
  return getMenuDetail(params.id);
}

export default function MenuDetails() {
  const menuDetail = useLoaderData();

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const { addToCart } = useMenu();

  const search = location.state?.search || "";
  const category = location.state?.category || "all";

  return (
    <>
      {menuDetail ? (
        <Box as="section" mt={10}>
          <Link to={`..${search}`}>
            <Button
              leftIcon={<BiArrowBack />}
              color="blackAlpha.800"
              variant="link"
              size="lg"
              mb={4}
            >
              Back to {category} menu
            </Button>
          </Link>
          <Flex direction={{ base: "column", lg: "row" }} gap={8}>
            <Box w={{ base: "auto", lg: "50%" }}>
              <Skeleton
                isLoaded={!isLoading}
                w="100%"
                h={{ base: "sm", sm: "md" }}
              >
                <Image
                  src={menuDetail.image}
                  alt={menuDetail.name}
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
                <Heading as="h3" size="lg">
                  {menuDetail.name}
                </Heading>
                <Tag variant="outline" fontSize="lg" colorScheme="red" p={2}>
                  $ {menuDetail.price}
                </Tag>
                <Text fontSize="2xl">{menuDetail.description}</Text>
                <Button colorScheme="red" onClick={() => addToCart(menuDetail)}>Add to Cart</Button>
              </VStack>
            </Box>
          </Flex>
        </Box>
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
    </>
  );
}
