import React, { FC } from "react";
import "./Content.css";
import Movie from "../Movie/Movie.lazy";
import { SimpleGrid } from "@chakra-ui/react";
interface ContentProps {}

const data = [
  {
    isNew: true,
    imageURL:
      "https://img.yts.mx/assets/images/movies/10_Years_2011/medium-cover.jpg",
    name: "10 Years (2011)",
    price: 4.5,
    rating: 4.2,
    numReviews: 1,
  },
  {
    isNew: false,
    imageURL:
      "https://img.yts.mx/assets/images/movies/10_Years_2011/medium-cover.jpg",
    name: "10 Years (2011)",
    price: 4.5,
    rating: 4.2,
    numReviews: 1,
  },
  {
    isNew: false,
    imageURL:
      "https://img.yts.mx/assets/images/movies/10_Years_2011/medium-cover.jpg",
    name: "10 Years (2011)",
    price: 4.5,
    rating: 4.2,
    numReviews: 1,
  },
  {
    isNew: false,
    imageURL:
      "https://img.yts.mx/assets/images/movies/10_Years_2011/medium-cover.jpg",
    name: "10 Years (2011)",
    price: 4.5,
    rating: 4.2,
    numReviews: 1,
  },
  {
    isNew: false,
    imageURL:
      "https://img.yts.mx/assets/images/movies/10_Years_2011/medium-cover.jpg",
    name: "10 Years (2011)",
    price: 4.5,
    rating: 4.2,
    numReviews: 1,
  },
];

const Content: FC<ContentProps> = () => {
  return (
    <SimpleGrid
      p={10}
      w="full"
      alignItems="center"
      justifyContent="center"
      columns={[1, 2, 3, 3]}
      // minChildWidth="220px"
      spacing="40px"
    >
      {data
        ? data.map((movie) => {
            return <Movie  {...movie} />;
          })
        : null}
    </SimpleGrid>
  );
};

export default Content;
