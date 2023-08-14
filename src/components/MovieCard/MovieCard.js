import React from "react";
import styles from "./movieCard.module.css";

const MovieCard = (props) => {
  return (
    <div
      id="parentCardContainer"
      style={{ backgroundColor: props.movie.color }}
      className={styles.cardContainer}
      onClick={(event) => {
        props.onCardClick(props.movie.EventCode, props.movie.TrailerURL);
      }}
    >
      <img
        className={styles.cardImage}
        src={props.movie.EventImageUrl}
        alt={"Dummy"}
      ></img>
      <div className={styles.releaseDateOverlay}>
        <p style={{ fontSize: "0.8em", fontWeight: "bolder" }}>
          {props.movie.ShowDate.split(" ")[1].slice(0, -1)}
          <br></br>
          {props.movie.ShowDate.split(" ")[0]}
        </p>
      </div>
      <p className={styles.cardText}>{props.movie?.EventTitle}</p>
      <div className={styles.ratingsOverlay}>
        <p style={{ fontSize: "1.5em", margin: "0" }}>
          {props.movie.wtsPerc + " %"}
        </p>
        <p style={{ margin: "0" }}>{props.movie.csCount + " Votes"}</p>
      </div>
    </div>
  );
};

export default MovieCard;
