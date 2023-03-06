import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { mockLineData as data } from "../../data/mockData";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="LINE CHART" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart data={data} />
      </Box>
    </Box>
  );
};

export default Line;
