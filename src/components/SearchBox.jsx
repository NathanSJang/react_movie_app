import { Grid, TextField } from "@material-ui/core"

export default function SearchBox({ searchVal, setSearchVal }) {
  return (
    <Grid sm="6">
      <TextField 
        style={{ background: 'white' }}
        color="white"
        label="Please Type Moive"
        variant="filled"
        fullWidth="true"
        onChange={(e) => setSearchVal(e.target.value)}
      />
    </Grid>
  );
}