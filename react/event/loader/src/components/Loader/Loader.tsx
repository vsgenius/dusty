import React from 'react';
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
  prosent: number;
};

const LinearWithValueLabel: FC<LinearProps> = ({ prosent }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={prosent} />
    </div>
  );
};

export { LinearWithValueLabel };
