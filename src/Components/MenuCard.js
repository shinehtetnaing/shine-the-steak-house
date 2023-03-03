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
    <Card maxW="sm">
      <CardBody>
        <Skeleton isLoaded={!isLoading} h={height}>
          <Image
            src={imageSrc}
            alt={name}
            fallbackSrc="https://via.placeholder.com/344"
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
          <Text color="blackAlpha.600">{description}</Text>
          <Text color="red.500" fontSize="2xl" fontWeight="bold">
            ${price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
