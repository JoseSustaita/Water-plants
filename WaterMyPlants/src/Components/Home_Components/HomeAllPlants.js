/* Imports */
import React, { useState, useEffect } from "react";
import Plants from "../Plant_Components/Plants";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import * as yup from "yup";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

/* Schema Build  */
const formSchema = yup.object().shape({
  name: yup.string().required("Plant Name Required"),
  /*maintenance: yup.array().of(string().oneOf(['low', 'medium', 'high']),*/
});

/*For Select*/

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: { "& > *": { margin: theme.spacing(1), width: "25ch" } },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const AllPlants = () => {
  /* State */
  const [plants, setPlantState] = useState({
    nickname: "",
    species: "",
  });

  const [errors, setErrors] = useState({
    nickname: "",
    species: "",
  });

  const classes = useStyles();
  const [maintenance, setMaintenance] = useState({
    value: "low",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  /* Event Handlers */
  const handleChange = (event) => {
    setMaintenance({
      ...maintenance,
      [event.target.name]: event.target.value,
    });

    setPlantState({
      ...plants,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefualt();
    console.log("form Submitted");
    axios()
      .post("https://preston-plant.herokuapp.com/api/plants", plants)
      .then((response) => console.log(response))
      .catch((error) => console.log("Error", error));
  };

  /*const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        });
      });
  };*/

  useEffect(() => {
    formSchema.isValid(plants).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [plants]);
  console.log(maintenance);
  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="plant-picture-grid" />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={0}
        >
          <Grid item sm={3} sm={3}>
            <Paper className={classes.paper}>
              <img
                src="https://images.pexels.com/photos/970089/pexels-photo-970089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="plant1"
              />
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              <img
                src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="plant2"
              />
            </Paper>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <label htmlFor="plant-name" />
        Plant Name
        <TextField
          name="nickname"
          value={plants.nickname}
          label="Your Plant's Name "
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="Plant-Care" />
        Maintenance
        <FormControl onChange={handleChange} className={classes.formControl}>
          <Select name="maintenance" value={maintenance} displayEmpty>
            <MenuItem onChange={handleChange} value={maintenance}>
              Low
            </MenuItem>
            <MenuItem name="medium" onChange={handleChange} value={"medium"}>
              Medium
            </MenuItem>
            <MenuItem onChange={handleChange} value="high">
              High
            </MenuItem>
          </Select>
          <FormHelperText>Select Maintenance Level</FormHelperText>
        </FormControl>
        <br></br>
        <br></br>
        <label htmlFor="plant-species" />
        Species (optional)
        <TextField
          name="species"
          value={plants.species}
          label="Your Plant's Species "
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="Add-Plant=Button" />
        <Button
          onChange={(e) => handleChange(e)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </form>
      <Plants />
    </div>
  );
};

export default AllPlants;
