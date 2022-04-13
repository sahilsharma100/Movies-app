import { Text, Box, chakra, Icon, Tooltip } from "@chakra-ui/react";
import React, { FC } from "react";
import "./Rating.css";
// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";

interface RatingProps {
  rating: number;
  numReviews: number;
}

const Rating: FC<RatingProps> = (props: RatingProps) => (
  <Box d="flex" alignItems="center">
    {/* {Array(5)
      .fill("")
      .map((_, i) => {
        const roundedRating = Math.round(props.rating * 2) / 2;
        if (roundedRating - i >= 1) {
          return (
            <BsStarFill
              key={i}
              style={{ marginLeft: "1" }}
              color={i < props.rating ? "teal.500" : "gray.300"}
            />
          );
        }
        if (roundedRating - i === 0.5) {
          return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
        }
        return <BsStar key={i} style={{ marginLeft: "1" }} />;
      })}
    <Box as="span" ml="2" color="gray.600" fontSize="sm">
      {props.numReviews} review{props.numReviews > 1 && "s"}
    </Box> */}
    <Tooltip
      label="Imdb Ratings"
      bg="white"
      placement={"top"}
      color={"gray.800"}
      fontSize={"1em"}
    >
      <chakra.a href={"#"} display={"flex"}  style={{ marginRight: "2" }} >
        <Icon as={FaImdb} h={7} w={7}  style={{ marginRight: "8" }} /> 
        <Text  fontSize={"1em"}>{props.rating} / 10</Text>
      </chakra.a>
    </Tooltip>
  </Box>
);

export default Rating;
