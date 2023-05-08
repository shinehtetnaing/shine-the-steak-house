import { Box, Grid, GridItem, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getMenu } from "../api";
import MenuCard from "../Components/MenuCard";

export function loader() {
  return getMenu();
}

export default function Menu() {
  const menu = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const displayedMenu = categoryFilter
    ? menu.filter((item) => item.category.toLowerCase() === categoryFilter)
    : menu;

  return (
    <Box as="section" mt={10}>
      <HStack justifyContent="center" mb={6}>
        <Wrap justify="center">
          <WrapItem>
            <Box
              _hover={{
                color: "#df4d4d",
                borderBottomColor: "gray.200",
                cursor: "pointer",
              }}
              borderBottom="2px solid"
              borderBottomColor={categoryFilter ? "blackAlpha.400" : "#df4d4d"}
              color={categoryFilter ? "black" : "#df4d4d"}
              fontSize={{ base: "xl", md: "2xl" }}
              mx={4}
              onClick={() => setSearchParams({})}
            >
              All
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              _hover={{
                color: "#df4d4d",
                borderBottomColor: "gray.200",
                cursor: "pointer",
              }}
              borderBottom="2px solid"
              borderBottomColor={
                categoryFilter === "steak" ? "#df4d4d" : "blackAlpha.400"
              }
              color={categoryFilter === "steak" ? "#df4d4d" : "black"}
              fontSize={{ base: "xl", md: "2xl" }}
              mx={4}
              onClick={() => setSearchParams({ category: "steak" })}
            >
              Steaks
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              _hover={{
                color: "#df4d4d",
                borderBottomColor: "gray.200",
                cursor: "pointer",
              }}
              borderBottom="2px solid"
              borderBottomColor={
                categoryFilter === "drink" ? "#df4d4d" : "blackAlpha.400"
              }
              color={categoryFilter === "drink" ? "#df4d4d" : "black"}
              fontSize={{ base: "xl", md: "2xl" }}
              mx={4}
              onClick={() => setSearchParams({ category: "drink" })}
            >
              Drinks
            </Box>
          </WrapItem>
          <WrapItem>
            <Box
              _hover={{
                color: "#df4d4d",
                borderBottomColor: "gray.200",
                cursor: "pointer",
              }}
              borderBottom="2px solid"
              borderBottomColor={
                categoryFilter === "dessert" ? "#df4d4d" : "blackAlpha.400"
              }
              color={categoryFilter === "dessert" ? "#df4d4d" : "black"}
              fontSize={{ base: "xl", md: "2xl" }}
              mx={4}
              onClick={() => setSearchParams({ category: "dessert" })}
            >
              Desserts
            </Box>
          </WrapItem>
        </Wrap>
      </HStack>
      <Grid
        templateRows={{
          base: "repeat(6, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {displayedMenu.map((item) => (
          <GridItem key={item.id}>
            <Link
              to={item.id}
              state={{
                search: `?${searchParams.toString()}`,
                category: categoryFilter,
              }}
            >
              <MenuCard
                id={item.id}
                imageSrc={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                height="250px"
              />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
