import React from 'react';
import { useState } from 'react';
import type { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, {
  LinearProgressProps,
} from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { FC } from 'react';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: '30%',
  },
});

type LinearProps = {
  setLoadComplete: Dispatch<SetStateAction<boolean>>;
};

const LinearWithValueLabel: FC<LinearProps> = ({ setLoadComplete }) => {
  const classes = useStyles();
  const [percent, setPercent] = useState(0);
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      setPercent((prev) => {
        if (prev + 1 > 100) {
          setLoadComplete(true);
          return prev;
        } else {
          return prev + 1;
        }
      });
      return;
    }
    if (event.key === 'ArrowLeft') {
      setPercent((prev) => (prev - 1 < 0 ? prev : prev - 1));
      return;
    }
  };
  return (
    <div className="App-header" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className={classes.root}>
        <LinearProgressWithLabel value={percent} />
      </div>
    </div>
  );
};

export { LinearWithValueLabel };
