import React from 'react';
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';

import CalResult from './components/CalResult';
import CalInputs from './components/CalInputs';

import OpacityIcon from '@material-ui/icons/Opacity';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles(() => ({
  root: {
    background: '#1a237e',
    height: '100vh'
  },
  heading: {
    color: '#e8eaf6'
  }
}))

const App = () => {
  const classes = useStyles();
  const [unitType, setUnitType] = React.useState(false);
  const [leaksNumber, setLeaksNumber] = React.useState(0);

  const handleChangeLeaksNumber = React.useCallback(event => {
    if (event.target.value) {
      setLeaksNumber(parseFloat(event.target.value))
    } else {
      setLeaksNumber(0)
    }
  }, []);

  const handleChangeUnitType = React.useCallback(event => {
    setUnitType(event.target.checked)
  }, []);

  const getWaterValue = React.useCallback(() => {
    if (leaksNumber !== null) {
      return unitType ? leaksNumber * 0.255 : leaksNumber * 0.00093;
    } else {
      return;
    }
  }, [leaksNumber, unitType]);

  const getEnergyValue = React.useCallback(() => {
    if (leaksNumber !== null) {
      return leaksNumber * 0.604;
    } else {
      return;
    }
  }, [leaksNumber]);

  return (
    <Container
      maxWidth={false}
    >
      <Box
        className={classes.root}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          variant="h2"
          className={classes.heading}
        >
          {unitType ? "ENGLISH" : "METRIC"}
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <CalInputs
              leaksNumber={leaksNumber}
              handleChangeLeaksNumber={handleChangeLeaksNumber}
              handleChangeUnitType={handleChangeUnitType}
              unitType={unitType}
            />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <CalResult
              title="Water"
              value={getWaterValue()}
              unit={unitType ? "Million gallons" : "Million m³"}
              avatar={<OpacityIcon/>}
              avatarStyle={{background: '#0d47a1'}}
            />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <CalResult
              title="Energy"
              value={getEnergyValue()}
              unit="MWH"
              avatar={<OfflineBoltIcon/>}
              avatarStyle={{background: '#e91e63'}}
            />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <CalResult
              title="CO2 Emissions"
              value={getEnergyValue()}
              unit="Metric tons"
              avatar={<EcoIcon/>}
              avatarStyle={{background: '#388e3c'}}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
