import { useQuery } from "react-query";
import { ResponsiveBar } from "@nivo/bar";

import { getUsers } from "../../api/getUser";

import * as S from "./styled";

function App() {
  const { data, refetch } = useQuery(["getUsers"], () => getUsers(), {
    refetchOnWindowFocus: false,
  });

  const refresh = () => refetch();

  const chartData = () => {
    if (!data) return [];

    return data.results.map(({ name, dob }) => {
      return {
        name: name.first,
        age: dob.age,
      };
    });
  };

  return (
    <S.Container>
      <S.Button onClick={refresh}>새로고침</S.Button>
      <ResponsiveBar
        data={chartData()}
        keys={["age"]}
        indexBy="name"
        layout="horizontal"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "name",
          legendPosition: "middle",
          legendOffset: 32,
        }}
      />
    </S.Container>
  );
}

export default App;