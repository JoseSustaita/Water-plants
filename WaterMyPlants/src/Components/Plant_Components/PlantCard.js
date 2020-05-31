import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function PlantCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia alt={props.species} height="140" title={props.species} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This plant is nicknamed: {props.name} and needs to be watered every{" "}
            {props.water} days.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
