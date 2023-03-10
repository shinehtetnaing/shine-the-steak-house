import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MenuCard from "../Components/MenuCard";

export default function Menu() {
  const [stakes, setStakes] = useState([]);
  // const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);

  const drinks = [
    {
      id: 1,
      name: "Cabernets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageSrc: () => require("../Assets/Images/drink-1.jpg"),
      price: "49",
    },
    {
      id: 2,
      name: "Zinfandel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageSrc: () => require("../Assets/Images/drink-2.jpg"),
      price: "59",
    },
    {
      id: 3,
      name: "Malbec",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageSrc: () => require("../Assets/Images/drink-3.jpg"),
      price: "69",
    },
    {
      id: 4,
      name: "Syrah (Shiraz)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageSrc: () => require("../Assets/Images/drink-4.jpg"),
      price: "79",
    },
    {
      id: 5,
      name: "Favorite Red",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageSrc: () => require("../Assets/Images/drink-5.jpg"),
      price: "99",
    },
    {
      id: 6,
      name: "Lemon Soda",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageSrc: () => require("../Assets/Images/drink-6.jpg"),
      price: "39",
    },
  ];

  const fetchStakes = () => {
    fetch("https://mock-steak-data-api.vercel.app/api/steaks")
      .then((response) => response.json())
      .then((data) => setStakes(data));
  };

  // const fetchDrinks = () => {
  //   fetch("https://free-food-menus-api-production.up.railway.app/drinks")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const randomItems = data.sort(() => 0.5 - Math.random()).slice(0, 6);
  //       setDrinks(randomItems);
  //     });
  // };

  const fetchDesserts = () => {
    fetch("https://mock-steak-data-api.vercel.app/api/desserts")
      .then((response) => response.json())
      .then((data) => setDesserts(data));
  };

  useEffect(() => {
    fetchStakes();
  }, []);

  // useEffect(() => {
  //   fetchDrinks();
  // }, []);

  useEffect(() => {
    fetchDesserts();
  }, []);

  return (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
      <Heading size="md" textAlign="center">
        Our Menu
      </Heading>
      <Box as="section" mt={10}>
        <Tabs align="center" variant="unstyled">
          <TabList mb={2}>
            <Wrap justify="center">
              <WrapItem>
                <Tab
                  _selected={{
                    color: "#df4d4d",
                    borderBottomColor: "#df4d4d",
                  }}
                  _hover={{
                    color: "#df4d4d",
                    borderBottomColor: "gray.200",
                  }}
                  borderBottom="2px solid"
                  borderBottomColor="blackAlpha.400"
                  fontSize={{ base: "xl", md: "2xl" }}
                  mx={4}
                >
                  Steaks
                </Tab>
              </WrapItem>
              <WrapItem>
                <Tab
                  _selected={{
                    color: "#df4d4d",
                    borderBottomColor: "#df4d4d",
                  }}
                  _hover={{
                    color: "#df4d4d",
                    borderBottomColor: "gray.200",
                  }}
                  borderBottom="2px solid"
                  borderBottomColor="blackAlpha.400"
                  fontSize={{ base: "xl", md: "2xl" }}
                  mx={4}
                >
                  Drinks
                </Tab>
              </WrapItem>
              <WrapItem>
                <Tab
                  _selected={{
                    color: "#df4d4d",
                    borderBottomColor: "#df4d4d",
                  }}
                  _hover={{
                    color: "#df4d4d",
                    borderBottomColor: "gray.200",
                  }}
                  borderBottom="2px solid"
                  borderBottomColor="blackAlpha.400"
                  fontSize={{ base: "xl", md: "2xl" }}
                  mx={4}
                >
                  Desserts
                </Tab>
              </WrapItem>
            </Wrap>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Menu</p>
              <Heading as="h3" fontWeight="semibold" mb={4}>
                Steaks
              </Heading>
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
                {stakes.map((stake) => (
                  <GridItem key={stake._id}>
                    <MenuCard
                      id={stake._id}
                      imageSrc={stake.image}
                      name={stake.name}
                      description={stake.description}
                      price={stake.price}
                      height="250px"
                    />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>

            {/*Drinks Menu Tab*/}
            <TabPanel>
              <p>Menu</p>
              <Heading as="h3" fontWeight="semibold" mb={4}>
                Drinks
              </Heading>
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
                {drinks.map((drink) => (
                  <GridItem key={drink.id}>
                    <MenuCard
                      imageSrc={drink.imageSrc()}
                      name={drink.name}
                      description={drink.description}
                      price={drink.price}
                      height="md"
                    />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>

            {/*Desserts Menu Tab*/}
            <TabPanel>
              <p>Menu</p>
              <Heading as="h3" fontWeight="semibold" mb={4}>
                Desserts
              </Heading>
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
                {desserts.map((dessert) => (
                  <GridItem key={dessert._id}>
                    <MenuCard
                      id={dessert._id}
                      imageSrc={dessert.image}
                      name={dessert.name}
                      description={dessert.description}
                      price={dessert.price}
                      height="350px"
                    />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
