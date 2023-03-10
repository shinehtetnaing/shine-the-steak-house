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
import { Link } from "react-router-dom";

export default function MenuCard({
  id,
  imageSrc,
  name,
  description,
  price,
  height,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link to={id}>
      <Card maxW="sm">
        <CardBody>
          <Skeleton isLoaded={!isLoading} h={height}>
            <Image
              src={imageSrc}
              alt={name}
              fallbackSrc="https://via.placeholder.com/330"
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
            <Text color="blackAlpha.600">{`${description.slice(0, 60)} ...`}</Text>
            <Text color="red.500" fontSize="2xl" fontWeight="bold">
              ${price}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
}
