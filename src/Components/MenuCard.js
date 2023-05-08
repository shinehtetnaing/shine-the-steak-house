import {
  Card,
  CardBody,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function MenuCard({
  imageSrc,
  name,
  description,
  price,
  height,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card
      maxW="sm"
      variant="outline"
      boxShadow="md"
      transition="all 0.2s"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
    >
      <CardBody>
        <Skeleton isLoaded={!isLoading} h={height}>
          <Image
            objectFit="cover"
            src={imageSrc}
            alt={name}
            borderRadius="lg"
            h={height}
            onLoad={() => setIsLoading(false)}
            display={isLoading ? "none" : "block"}
          />
        </Skeleton>
        <Stack mt="6" spacing="3">
          <Heading size="md" fontWeight="semi-bold">
            {name}
          </Heading>
          <Text color="blackAlpha.600">{`${description.slice(
            0,
            60
          )} ...`}</Text>
          <Text color="red.500" fontSize="2xl" fontWeight="bold">
            ${price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
