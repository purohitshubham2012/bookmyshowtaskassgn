// Parent grid component to list all the trailers cards. This is responsive too.
import React, { useCallback, useEffect, useRef, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Video from "../Video/Video";
import styles from "./grid.module.css";

const Grid = (props) => {
  const [moviesCards, setMoviesCard] = useState([]);
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    getGridCards(props.moviesData);
  }, [props.moviesData]);

  // Create list of grid cards using reusable 'MovieCard' componnents.
  const getGridCards = (moviesData) => {
    let movieCards = Object.entries(moviesData).map(([key, movie]) => {
      return (
        <MovieCard
          onCardClick={handleMovieCardClick}
          key={key}
          movie={movie}
        ></MovieCard>
      );
    });

    setGridItems(() => {
      return [...movieCards];
    });
    setMoviesCard(() => {
      return [...movieCards];
    });
  };

  // Handle the click on each MovieCard
  const handleMovieCardClick = async (cardKey, videoURL) => {
    // get the index on the clicked card
    let cardPosindex = getMovieCardPosIndex(cardKey);

    // get the list of MovieCard compoents plus the video element for the clicked card
    let newGridItems = await createNewGridItems(cardPosindex, videoURL);

    // update the input to the grid layout.
    setGridItems([...newGridItems]);
  };

  const getMovieCardPosIndex = (movieCardKey) => {
    return Object.keys(props.moviesData).findIndex((movieKey) => {
      return movieKey === movieCardKey;
    });
  };

  // insert the video element in the list of MovieCard componnents
  const createNewGridItems = (cardPosindex, videoURL) => {
    return new Promise((resolve, reject) => {
      let video = (
        <Video key={cardPosindex + "_video"} videoURL={videoURL}></Video>
      );

      let newGridItems = [...moviesCards];
      newGridItems.splice(cardPosindex, 0, video);

      resolve(newGridItems);
    });
  };

  return <div className={styles.gridConatiner}>{gridItems}</div>;
};

export default Grid;
