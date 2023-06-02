import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sunburst from "../pages/Bar/index";
import Bar from "./Bar"
import Pie from "./Pie"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bar />} />
        <Route path="/Sunburst" element={<Sunburst />} />
        <Route path="/Pie" element={<Pie />} />

      </Routes>
    </BrowserRouter>
  );
}