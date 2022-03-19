import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { dummydata } from "./constant";
let finalData = new Array();
let tickerData = dummydata.records.reduce((group, ticket) => {
  const assignee = ticket.assignee;

  group[assignee] = group[assignee] ?? [];
  group[assignee].push(ticket);
  return group;
}, {});

Object.keys(tickerData).forEach((item) => {
  finalData.push({ name: item, count: tickerData[item].length });
});
console.log("tickerData", finalData);
const data = [{ year: 1234, population: 5.8 }];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries valueField="population" argumentField="year" />
          <Title text="Ticket Data" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
