import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  FormControlLabel,
  Box,
  Card,
  Typography,
  makeStyles,
  TextField,
  Switch
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    margin: theme.spacing(1),
    width: '80%'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

const CalInputs = ({
  className,
  leaksNumber = 0,
  unitType,
  handleChangeLeaksNumber = () => {},
  handleChangeUnitType = () => {},
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box flexGrow={1}>
        <Typography
          component="h6"
          gutterBottom
          variant="h6"
          color="textSecondary"
        >
          Enter the number of leaks you intend to find and repair in 1 year:
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <TextField
            label="Leaks Number"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.input}
            type="number"
            value={leaksNumber}
            onChange={handleChangeLeaksNumber}
          />
        </Box>
      </Box>
      <Box>
        <Typography
          component="h6"
          gutterBottom
          variant="h6"
          color="textSecondary"
        >
          Units
        </Typography>
        <FormControlLabel
          control={<Switch checked={unitType} onChange={handleChangeUnitType} name="unitType" />}
          label={unitType ? "English" : "Metric"}
        />
      </Box>
    </Card>
  );
};

CalInputs.propTypes = {
  className: PropTypes.string,
  leaksNumber: PropTypes.number,
  unitType: PropTypes.bool,
  handleChangeLeaksNumber: PropTypes.func,
  handleChangeUnitType: PropTypes.func
};

export default CalInputs;
