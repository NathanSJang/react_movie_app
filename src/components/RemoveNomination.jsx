import { Typography } from "@material-ui/core"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function RemoveNomination() {
  return(
    <>
      <Typography>Remove from Nomination</Typography><DeleteForeverIcon color="secondary" />
    </>
  );
}