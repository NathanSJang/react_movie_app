import { Typography } from "@material-ui/core";
import TheaterImg from '../Images/movie_theater.jpg';

export default function NoMovie() {
  return (
    <div className="no-container">
      <img className="no-img" src={TheaterImg} alt="NomovieImg" />
      <Typography style={{ position: "absolute" }} align="center" variant="h3">No Movies!</Typography>
    </div>
  );
}