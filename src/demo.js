import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { dummydata } from "./constant";
let finalData = [];
let tickerData = dummydata.records.reduce((categories, ticket) => {
  const assignee = ticket.assignee;
 
if(assignee in categories){
  categories[assignee]++
  finalData.filter(x=>x.name===assignee)[0].count=categories[assignee]

  
}else
{
  categories[assignee]=1
  // if(finalData.filter(x=>x.name===assignee).length>0){
  // finalData.filter(x=>x.name===assignee)[0].count=categories[assignee]

  // }else{
  finalData.push({name:assignee,count:categories[assignee]})
  //}

  
}
  return categories;
}, {});
console.log("tickerData", tickerData);
console.log("finalData", finalData);


export default class Demo extends React.PureComponent {

  render() {

    return (
      
       <Paper>
        <Chart data={finalData}>
          <ArgumentAxis showLabels='false' >
          
           </ArgumentAxis>
          <ValueAxis  />

          <BarSeries valueField="count" argumentField="name" />
          <Title text="Ticket Data" />
          <Animation />
        </Chart>
      </Paper>
      
    );
  }
}
