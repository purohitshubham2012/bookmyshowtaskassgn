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

  const handleMovieCardClick = async (cardKey, videoURL) => {
    console.log("index", cardKey);
    let cardPosindex = getMovieCardPosIndex(cardKey);
    console.log("index", cardPosindex);

    let newGridItems = await createNewGridItems(cardPosindex, videoURL);
    console.log("udpatd grid items", newGridItems);

    setGridItems([...newGridItems]);
  };

  const getMovieCardPosIndex = (movieCardKey) => {
    return Object.keys(props.moviesData).findIndex((movieKey) => {
      return movieKey === movieCardKey;
    });
  };

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
