import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  unit: {
    marginTop: 10,
    marginLeft: 10
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

const CalResult = ({ 
  className,
  title = '',
  value,
  unit = '',
  avatar,
  avatarStyle = {},
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
          component="h5"
          gutterBottom
          variant="h5"
          color="textSecondary"
        >
          {title}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <Typography
            variant="h3"
            color="textPrimary"
          >
            {value && value.toFixed(4)}
          </Typography>
          <Typography
            variant="h5"
            color="textPrimary"
            className={classes.unit}
          >
            {unit && unit}
          </Typography>
        </Box>
      </Box>
      <Avatar className={classes.avatar} style={avatarStyle}>
        {avatar && avatar}
      </Avatar>
    </Card>
  );
};

CalResult.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string,
  avatar: PropTypes.node,
  avatarStyle: PropTypes.object
};

export default CalResult;
