import { Grid, Typography } from '@material-ui/core';

export default function SectionTitle({ title }) {
  return (
    <Grid item sm="4">
      <Typography variant="h3">{title}</Typography>
    </Grid>
  );
}