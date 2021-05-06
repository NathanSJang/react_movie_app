import { Typography } from "@material-ui/core"
import awardImg from "../Images/award.jpg"

export default function NoNomination() {
  return (
    <div className="no-container">
      <img className="no-img" src={awardImg} alt="noNomiantionImg" />
      <Typography style={{ position: "absolute" }} variant="h3" >Please Add Moive for Nomination</Typography>
    </div>
  );
}