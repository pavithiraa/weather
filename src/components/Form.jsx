import { Box, TextField, Button, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getData } from "../service/api";
import Information from "./Information";

const useStyles = makeStyles({
  component: {
    padding: 10,
    display: "flex",
    background: "#636FA4",
  },
  input: {
    color: "#fff",
    marginRight: 10,
  },
  button: {
    width: 150,
    height: 50,
    background: "#E8CBC0",
    color: "#fff",
    marginTop: 10,
  },
});
const Form = () => {
  const classes = useStyles();
  const [data, getWeatherData] = useState();
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [click, handleClick] = useState(false)

  useEffect(() => {
    const getWeather = async () => {
      city && await getData(city, country).then((res) => {
        getWeatherData(res.data);
        console.log(res.data);
      });
    };
    getWeather();
    handleClick(false);
  }, [click]);

  const handleCityChange = (city) => {
      setCity(city)
  }

  const handleCountryChange = (country) => {
    setCountry(country)
}

  return (
    <>
      <Box className={classes.component}>
        <TextField
          InputProps={{ className: classes.input }}
          onChange={(e) => handleCityChange(e.target.value)}
          label="City"
          className={classes.input}
        />
        <TextField
          label="Country"
          onChange={(e) => handleCountryChange(e.target.value)}
          InputProps={{ className: classes.input }}
          className={classes.input}
        />

        <Button variant="contained" className={classes.button}
            onClick={() => handleClick(true)}>
          Get Weather
        </Button>
      </Box>
      <Information data={data} />
    </>
  );
};

export default Form;
