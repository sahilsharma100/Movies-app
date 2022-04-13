import {
  Flex,
  Box,
  useColorModeValue,
  Circle,
  Badge,
  Image,
} from "@chakra-ui/react";
import React, { FC } from "react";
import "./Movie.css";
import Rating from "../Rating/Rating.lazy";

interface MovieProps {
  isNew: boolean;
  imageURL: string;
  name: string;
  price: number;
  rating: number;
  numReviews: number;
}

const Movie: FC<MovieProps> = (data: MovieProps) => (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="lg"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      justifyContent="center"
    >
      {data.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />
      )}
      <Flex mt="1" justifyContent="center" alignContent="center">
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />
      </Flex>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {data.isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          )}
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="1em"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {data.name}
          </Box>
        </Flex>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Rating rating={data.rating} numReviews={data.numReviews} />
        </Flex>
      </Box>
    </Box>
);

export default Movie;
