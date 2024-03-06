import React from 'react';
import type { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

type SliperProps = {
    setRgb: Function;
    rgb:{
        red:number;
        green:number;
        blue:number;
        opacity: number;
    }
  
};

function valuetext(value: number) {
  return `${value}°C`;
}

const DiscreteSlider: FC<SliperProps> = ({ rgb, setRgb }) => {
  const classes = useStyles();
  const handleChangeRed = (event: any, newValue: number | number[]) => {
   if (!Array.isArray(newValue)) {
        setRgb((prev:any) => {
            return {...prev, red:newValue}})
   }
  };
  const handleChangeGreen = (event: any, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
        setRgb((prev:any) => {
            return {...prev, green:newValue}})
   }
   };
   const handleChangeBlue = (event: any, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
        setRgb((prev:any) => {
            return {...prev, blue:newValue}})
   }
   };
   const handleChangeOpac = (event: any, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
        setRgb((prev:any) => {
            return {...prev, opacity:newValue}})
   }
   };
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Красный
      </Typography>
      <Slider
      onChange={handleChangeRed}
        defaultValue={0}
        value={rgb.red}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        step={1}
        min={0}
        max={255}
      />
      <Typography id="discrete-slider" gutterBottom>
        Зеленый
      </Typography>
      <Slider
      onChange={handleChangeGreen}
        defaultValue={0}
        value={rgb.green}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        step={1}
        min={0}
        max={255}
      />
      <Typography id="discrete-slider" gutterBottom>
        Синий
      </Typography>
      <Slider
      onChange={handleChangeBlue}
        defaultValue={0}
        value={rgb.blue}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        step={1}
        min={0}
        max={255}
      />
      <Typography id="discrete-slider" gutterBottom>
        Прозрачность
      </Typography>
      <Slider
      onChange={handleChangeOpac}
        defaultValue={1}
        value={rgb.opacity}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        step={0.01}
        min={0}
        max={1}
      />
    </div>
  );
};

export { DiscreteSlider };
