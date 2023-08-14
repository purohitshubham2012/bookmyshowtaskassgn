import React, { useEffect, useState } from "react";
import { CONSTANTS } from "../../common/constants";
import { getMockData } from "../../services/getMoviesData";
import Grid from "../Grid/Grid";
import HeaderButtons from "../HeaderButtons/HeaderButtons";
import SelectInput from "../SelectInput/SelectInput";
import styles from "./home.module.css";

const Home = () => {
  const [moviesData, setMoviesData] = useState({});
  const [filteredMoviesData, setFilteredMoviesData] = useState({});
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    getMockData()
      .then((mockData) => {
        setLanguages(mockData.languageList);
        setMoviesData(mockData.moviesData);
        setFilteredMoviesData(mockData.moviesData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onLangChangeHandler = (event) => {
    console.log("clicked", event.target.value);
    let filteredMovies = getMoviesOnLanguage(event.target.value);
    console.log("movies", filteredMovies);

    setFilteredMoviesData({ ...filteredMovies });
  };

  const getMoviesOnLanguage = (language) => {
    let filteredMovies = Object.entries(moviesData).filter(([key, movie]) => {
      return movie.EventLanguage === language;
    });
    return Object.fromEntries(filteredMovies);
  };

  return (
    <>
      <div id="parentHomeContainer" className={styles.parentHomeContainer}>
        <div className={styles.pageHeader}>
          <div className={`${styles.header} ${styles.headerLeft}`}>
            <HeaderButtons
              selected={true}
              buttonTitle={"COMING SOON"}
            ></HeaderButtons>
            <HeaderButtons buttonTitle={"NOW SHOWING"}></HeaderButtons>
          </div>
          <div className={`${styles.header} ${styles.headerRight}`}>
            <SelectInput
              default={"Fresh"}
              options={["Fresh", "Popular"]}
            ></SelectInput>
            <SelectInput
              options={languages}
              default={CONSTANTS.langaugeSelectBox}
              onChange={onLangChangeHandler}
            ></SelectInput>
            <SelectInput default={CONSTANTS.genreSelectBox}> </SelectInput>
          </div>
        </div>
        <Grid moviesData={filteredMoviesData}></Grid>
      </div>
    </>
  );
};

export default Home;
