import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { argument: 'Monday', value: 10 },
  { argument: 'Tuesday', value: 40 },
  { argument: 'Wednesday', value: 10 },
  { argument: 'Thursday', value: 20 },
  { argument: 'Friday', value: 20 },
];

function Skills() {
  return (
    <React.Fragment>
      <Paper>
        <Chart
          data={data}
        >
          <PieSeries valueField="value" argumentField="argument" />
          <Title text="Studies per day" />
          <Legend />
          <Animation />
        </Chart>

      </Paper>
      <div style={{color:'red', fontSize:'70px', paddingTop:'100px'}}><b>Page under construction</b></div>
    </React.Fragment>

  )
}

export default Skills