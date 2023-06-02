import { useQuery } from "react-query";
import { ResponsiveSunburst } from '@nivo/sunburst'

// import { getUsers } from "../../api/getUser";
import getUsers from "../.././api/Fakeapi.json";
import * as S from "./styled";

function App() {
  const { data, refetch } = useQuery(["getUsers"], () => getUsers(), {
    refetchOnWindowFocus: false,
  });

  const refresh = () => refetch();

  const chartData = () => {
    if (!data) return [];

    return data.results.map(({ name}) => {
      return {
        name: name.first,
        age: dob.age,
      };
    });
  };

  return (
    <S.Container>
      <button onClick={refresh}>새로고침</button>
      <ResponsiveSunburst
        data={chartData}
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