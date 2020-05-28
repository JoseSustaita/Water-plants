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
  nickname: yup.string().required("Plant Name Required"),
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
    user_id: 1,
    nickname: "",
    species: "",
  });

  const classes = useStyles();
  const [maintenance, setMaintenance] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  /* Event Handlers */
  const handleChange = (event) => {
    setMaintenance(event.target.value);
    setPlantState({
      ...plants,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefualt();

    axios()
      .post(
        `
       https://preston-plant.herokuapp.com/api/plants`
      )
      .then((response) => {
        console.log("Post Response", response);
        console.log(response.data.token);
      })
      .catch((error) => console.log("Error > ", error));
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
        <TextField value={plants.nickname} label="Your Plant's Name " />
        <br></br>
        <br></br>
        <label htmlFor="Plant-Care" />
        Maintenance
        <FormControl className={classes.formControl}>
          <Select
            value={maintenance}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled></MenuItem>
            <MenuItem value={10}>Low</MenuItem>
            <MenuItem value={20}>Medium</MenuItem>
            <MenuItem value={30}>High</MenuItem>
          </Select>
          <FormHelperText>Select Maintenance Level</FormHelperText>
        </FormControl>
        <br></br>
        <br></br>
        <label htmlFor="plant-species" />
        Species (optional)
        <TextField
          value={plants.species}
          id="standard-basic"
          label="Your Plant's Species "
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
