import { useQuery } from "react-query";
import { ResponsivePie } from '@nivo/pie'

import { getUsers } from "../../api/getUser";

import * as S from "./styled";

function Pie() {
  const { data, refetch } = useQuery(["getUsers"], () => getUsers(), {
    refetchOnWindowFocus: false,
  });

  const refresh = () => refetch();

  const chartData = () => {
    if (!data) return [];

    let obj: {[key in string]: number} = {};

    data.results.forEach(({nat}) => (obj[nat] = obj[nat] + 1 || 1));

    return Object.entries(obj).map(([key, value]) => ({ id:key, label: key, value: value}));
   
    };
    return (
      <S.Container>
        <button onClick={refresh}>새로고침</button>
        <ResponsivePie
          data={chartData()}
          
          margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
          
        />
      </S.Container>
    );

  };


export default Pie;