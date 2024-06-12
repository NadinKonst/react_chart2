import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 7],
  ["Eat", 2],
  ["Commute", 2],
  ["Study", 4],
  ["Sleep", 7],
  ["Yoga", 1],
  ["Walk", 1],
  ["Youtube", 2],
];

const options = {
  title: "My Daily Activities",
  is3D: true,
};

export default function Graphics() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"600px"}
      />
    </div>
  );
}
